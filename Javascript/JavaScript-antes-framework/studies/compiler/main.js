class User {
  constructor({ user, email }) {
    this.user = user;
    this.email = email;
  }

  sendMessage() {
    console.log(
      `Mensagem enviada para: ${this.email} que pertence à ${this.user}`
    );
  }
}

let user = new User({ user: "Lana del rey", email: "lanadelrey@gmail.com" });
user.sendMessage();
