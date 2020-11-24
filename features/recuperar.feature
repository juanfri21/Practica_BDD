# language: es
# encoding: utf-8


Característica: Recuperar lista ordenada con las claves

Escenario: Al agregar un elemento al principio la lista esta ordenada 
    Dado una lista con los siguientes elementos
    | "cuatro" | 4 |
    | "tres"   | 3 |
    | "dos"    | 2 |
    | "uno"    | 1 |
    Entonces se obtiene la lista de claves ordenadas 
    | cuatro | dos | tres | uno |

Escenario: Al agregar un elemento al final la lista esta ordenada 
    Dado una lista con los siguientes elementos
    | "uno"    | 1 |
    | "dos"    | 2 |
    | "tres"   | 3 |
    | "cuatro" | 4 |
    Entonces se obtiene la lista de claves ordenadas 
    | cuatro | dos | tres | uno |

Escenario: Al agregar una clave que ya está en la lista se actualiza el valor correspondiente 
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    | "dos"  | 2 |
    | "tres" | 3 |
    Cuando se agrega la pareja {"dos": 5}
    Y se busca la clave "dos"
    Entonces se obtiene el valor 5

Escenario: Eliminar un elemento a partir de su clave 
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    | "dos"  | 2 |
    | "tres" | 3 |
    Cuando se elimina la clave "dos"
    Entonces se obtiene la lista de claves ordenadas
    | tres | uno |
