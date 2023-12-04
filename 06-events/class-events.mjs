import { error } from "console";
import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on("likePost", (userName) => {
      console.log("Some logic after liked my post", userName);
    });
    this.on("userNameError", (error) => {
      console.error(error);
    });
  }

  like(userName) {
    if (!userName) {
      return this.emit(
        "userNameError",
        new Error("No username in the like request")
      );
    }
    this.likesQty++;
    this.emit("likePost", userName);
  }
}

const myPost = new Post("Sergey", "Some post!");

myPost.like("Vasia");
setTimeout(() => myPost.like(), 3000);
