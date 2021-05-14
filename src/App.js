
// mport desktop from "./images/bg-intro-desktop.png";
import './App.css';

function App() {

  return (
    <>
    <div className= "container">
      <main>
        <div className="left-side">
          <h2>Learn to code by<br></br>
             watching others</h2>
          <p>
                See how experienced developers solve problems in real-time.<br></br>
                watching scripted tutorials is great, but understanding how
                developers think is invaluable.
            </p>
        </div>
        <div className="right-side">
          <div className="trial">
              <a href="/"><strong>Try it free 7 days </strong> then $20/mo. thereafter</a>
          </div>
            <form className="form-field">
                <input type="text" class="form-input" id="fname" name="fname" placeholder="Jonathan|"/>
                <input type="text" class="form-input" id="lname" name="lname" placeholder="Last Name"/>
                <input type="email" class="form-input" id="email" name="email" placeholder="Email Address"/>
                <input type="password" class="form-input" id="password" name="password" placeholder="Password"/>
                <input
                    type="button"
                    id="button3"
                    name="button"
                    placeholder="button"
                    value="CLAIM YOUR FREE TRIAL"
                />
                <p className="terms">
                    By clicking the button, you are agreeing to our
                    <a href="/">Terms and Services</a>
                </p>
           </form>
        </div>
      </main>

    </div>
    </>
  );
}

export default App;
