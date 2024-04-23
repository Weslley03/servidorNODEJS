const controle = {
    getById: (require, response) => {
        response.send(`usuario do ID ${require.params.id}`)
        console.log(id)
    }
}
module.exports = controle