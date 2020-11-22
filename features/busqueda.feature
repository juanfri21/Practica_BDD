# language: es
# encoding: utf-8

# node_modules/.bin/cucumber-js --publish-quiet
# node_modules/.bin/cucumber-js --publish-quiet --tags @wip

Característica: Buscar valores en la lista a partir de las claves

Escenario: Buscar un valor en una lista vacía
    Dado una lista vacía
    Cuando se busca la clave "clave"
    Entonces se obtiene el valor NaN


@wip
Escenario: Lista con un elemento
    Dado una lista con los siguientes elementos
    | "clave" | "valor"|
    Cuando se busca la clave "clave"
    Entonces se obtiene el valor "valor"