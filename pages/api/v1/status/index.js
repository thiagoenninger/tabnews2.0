function status(request, response) {
    response.status(200).json({chave: "Eu consigo, vou mudar de carreira."})
}

export default status