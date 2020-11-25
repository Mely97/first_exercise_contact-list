import React from "react";
import Item from "./Item";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          postId: 1,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body:
            "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
      ],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => this.setState({ comments: data }));
  }
  render() {
    console.log("State", this.state.comments);
    return (
      <React.Fragment>
        {this.state.comments.map((comment) => {
          let { email, name, body } = comment;
          return <Item email={email} name={name} body={body}></Item>;
        })}
      </React.Fragment>
    );
  }
}

export default List;
