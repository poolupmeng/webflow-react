import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        Do you have a preferred location in mind?
                    </div>
                    <input type="radio" id="open" name="preferred_location" value="open" />
                    <label for="open">I'm open for suggestion</label>
                    <br />
                    <input type="radio" id="area" name="preferred_location" value="area" />
                    <label for="area">I've locked in my preferred area</label>
                    <br />
                    <input type="radio" id="exact" name="preferred_location" value="exact" />
                    <label for="exact">I know the exact building I want to stay in</label>
                    <div>
                        <input className="Button Primary" type="submit" value="Submit" />
                        <button className="Button Secondary">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(App, {}, null),
    document.getElementById('react-target')
);