import React from "react";
import send from "./assets/send.svg"
import user from "./assets/user.png"
import bot from "./assets/bot.png"
import loader from "./assets/loader.svg"


const App = () => {

  
  return (
    <main className="chatGPT-app">
      {/* chat all container */}
      <section className="chat-container">
        <div className="layout">
          {/* user */}
          <div className="chat-bubble">
            <div className="avatar">
              <img src={user} alt="" />
            </div>
            <div className="post">Lorem, ipsum dolor.</div>
          </div>
          {/* bot */}
          <div className="chat-bubble bot">
            <div className="avatar">
              <img src={bot} alt="" />
            </div>
            <div className="post">Lorem, ipsum dolor.</div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer>
        <input 
           className="composebar"
           autoFocus
           type="text"
           placeholder="Ask Anything! Su Mon"
           onChange={()=>{}}
        />
        <div className="send-button">
          <img src={send} alt="text send button" />
        </div>
      </footer>
    </main>
  );
};

export default App;
