<template>
  <div style="margin-left:6px">
    <div class="top-bar">
      <h1 class="xmeme">X Meme</h1>
      <div class="buttons">
        <button
          class="linkedin"
          onclick="window.open('https://www.linkedin.com/in/ayushshah1234/')"
        >@ayushshah</button>
        <button
          class="swagger"
          onclick="window.open('https://www.xmeme.coolayush.ninja/swagger-ui/')"
        >Swagger</button>
      </div>
    </div>
    <p class="tagline">Keep 'em quirky memes coming!</p>
    <div class="container">
      <div>
        <center>
          <h1 style="font-weight:700">Meme Stream</h1>
        </center>
      </div>
      <form>
        <div class="row">
          <div class="col-25">
            <label for="name" style="font-size:18px">Meme Owner*</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              placeholder="Enter your full name"
              required="true"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="caption" style="font-size:18px">Caption*</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="caption"
              name="caption"
              v-model="caption"
              placeholder="Be creative with the caption"
              required="true"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="url" style="font-size:18px">Meme URL*</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="url"
              name="url"
              v-model="url"
              placeholder="Enter URL of your meme here"
              required="true"
            />
          </div>
        </div>
        <div class="row">
          <input type="submit" v-on:click.prevent="createMeme" value="Post Meme" />
        </div>
      </form>
      <!--<div class="preview">
        <div class="">
          <label for="preview" style="font-size:30px; font-weight:700;">Meme Preview</label>
        </div>
        <div>
          <h3 align="center">{{ name }}</h3>
          <p align="center">{{ caption }}</p>
          <img :src="url" class="image-preview" alt="" />
        </div>
      </div>-->
      <h3 v-if="error" align="center">
        <span class="error-text">{{ error }}</span>
      </h3>
    </div>
    <div>
      <div class="col-40" v-for="post in posts" v-bind:key="post._id">
        <div>
          <h3 align="left">{{ post.name }}</h3>
          <p class="caption" align="left">{{ post.caption }}</p>
        </div>
        <img :src="post.url" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "PostMemeComponent",
  data() {
    return {
      posts: [],
      max: 45,
      error: "",
      name: "",
      caption: "",
      url: ""
    };
  },
  async created() {
    try {
      //{{ `${post.date.getDate()}/${post.date.getMonth()}/${post.date.getFullYear()}` }}
      this.posts = await PostService.getMemes();
      console.log(this.posts);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createMeme() {
      try {
        if (!this.name || !this.caption || !this.url) {
          throw new Error("Make sure all required fields are filled up !");
        }
        await PostService.postMemes({
          name: this.name.substr(0, Math.min(this.name.length, 42)),
          caption: this.caption.substr(0, Math.min(this.caption.length, 42)),
          url: this.url
        });
      } catch (err) {
        this.error = err.message;
      }
      this.posts = await PostService.getMemes();
      this.name = "";
      this.caption = "";
      this.url = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  box-sizing: border-box;
  resize: vertical;
  outline-color: #0000ff;
}

/* Style the submit button */
input[type="submit"] {
  background-color: #0000ff;
  color: white;
  font-size: 17px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 5px;
  cursor: pointer;
  float: right;
}

.swagger {
  background-color: #07a515;
  color: white;
  font-size: 17px;
  padding: 12px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 5px;
  cursor: pointer;
  float: right;
}

.linkedin {
  background-color: #0000ff;
  color: white;
  font-size: 17px;
  padding: 12px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 5px;
  cursor: pointer;
  float: right;
}

.tagline {
  font-size: 1.25rem;
  display: block;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #888;
}

.caption {
  padding-bottom: 5px;
  font-size: 1.2rem;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  color: #888;
}

.error-message {
  background-color: #fce4e4;
  border: 1px solid #fcc2c3;
  float: left;
  padding: 10px 10px;
}

.error-text {
  color: #cc0033;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  text-shadow: 1px 1px rgba(250, 250, 250, 0.3);
}

* {
  box-sizing: border-box;
}

.image {
  border-radius: 10px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-box-shadow: -5px -5px 5px #888;
  -webkit-box-shadow: -5px -5px 5px rgb(170, 170, 170);
  box-shadow: -5px -7px 5px #888;
}

img {
  width: 100%;
  height: 250px;
}

.column {
  padding-right: 50%;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.col-40 {
  float: left;
  width: 33.3%;
  height: auto;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.image-preview {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 33.3%;
  height: auto;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.xmeme {
  display: inline;
  font-size: 35px;
  font-weight: 700;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns 
  stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  .col-40,
  .col-40,
  .col-40 input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
  .xmeme {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tagline {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .linkedin {
    float: none;
    display: inline;
    margin-right: 4px;
  }
  .swagger {
    float: left;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
