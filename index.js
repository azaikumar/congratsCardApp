const element = (
  <div className="bgImage">
    <h1>Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <p className="name">Kiran V</p>
      <p className="instituteName">
        Vishnu Institute of Computer Engineering and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image-watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
