enum HttpStatus {
    OK = 200,
    CREATED = 201,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

enum Resposta {
    Sim, Nao
}

const errorCode: HttpStatus = HttpStatus.NOT_FOUND;

// alternativa para evitar valores mágicos
const statusHttp = {
    OK: 200,
    CREATED: 201,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
} as const;

if (errorCode === statusHttp.NOT_FOUND) {
    console.error('Erro');
}

