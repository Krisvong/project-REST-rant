//import the React library
const React = require('react')
//import the 'Def' component from the '../default' file. Use to wrap the content of this component in a layout that provides consistent structure and styling for all pages of the application.
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <br />
                    <label>
                        Description:
                        <input type="text" name="description" />
                    </label>
                    <br />
                    <label>
                        Address:
                        <input type="text" name="address" />
                    </label>
                    <br />
                    <label>
                        Image URL:
                        <input type="text" name="image" />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </Def>
    )
}

//export the 'new_form' component for use in other parts of the application.
module.exports = new_form


