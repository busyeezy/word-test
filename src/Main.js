export default function Main({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement("div");
  this.$target.className = "mainPage";
  $app.append(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const $welcome = document.createElement("h1");
    $welcome.innerText = "WELCOME TO YUMMY WORLD🌶";
    this.$target.append($welcome);

    const $startButton = document.createElement("button");
    $startButton.innerText = "LET'S GO";
    this.$target.append($startButton);
  };

  this.render();
}
