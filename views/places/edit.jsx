const React = require('react')
const Def = require('../default')

function edit_form(){
    return (
        <Def>
            <main>
                <h1>Edit a Place</h1>
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

module.exports = edit_form