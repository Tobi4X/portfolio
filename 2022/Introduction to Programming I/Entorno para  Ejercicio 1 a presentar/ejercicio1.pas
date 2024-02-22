program ejercicio12;

{$INCLUDE/IntroProg/Estructu}


procedure agregar_valores(var datos :fila; pos, val :integer);

var aux :fila;
    largo, resultadodato :integer;

begin
    
    largo:= 0;
    
    while not filavacia(datos) do begin
        largo := largo + 1;
        agregar(aux,extraer(datos));
    end;
    
    while not filavacia(aux) do begin
        agregar(datos,extraer(aux));
    end;
    
    {los dos anteriores while pasan los numeros de datos a aux y luego los devuelven; en el proceso suma 1 a el largo por cada numero que hay en la pila datos; consiguiendo asi calcular el largo de datos}
    
    if pos <= largo then begin {verifica que la posicion no sea mayor al largo ya que sino no podria modificarla}
        
        pos := pos - 1; { resta 1 a la posicion para lograr que las posiciones arranquen desde 1 "primer numero en la fila" hasta n "enecimo numero en la fila". ya que, de otra forma el primer numero corresponderia a la posicion 0}
        
        
        while pos > 0 do begin {este while saca de la fila los numero que estan antes del que hay que modificar para dejar el numero a modificar como el primero}
        
            pos := pos - 1;
            agregar(aux,extraer(datos));
            
        end;
        
        resultadodato := primero(datos) + val; {asigna al resultado el valor de la suma del numero a modificar mas el valor} 
        extraer(datos); {extrae el valor original de datos}
        agregar(aux, (resultadodato));{ agrega a aux el valor de datos ya modificado}
        
        
        
        while not filavacia(datos) do begin { termina de pasar los numeros que hayan quedado en la fila datos, si es que hay alguno}
        
            agregar(aux,extraer(datos));
            
        end;
        
        while not filavacia(aux) do begin { devuelve los numeros a la fila datos ya modificada}
        
            agregar(datos,extraer(aux));
            
        end;
        
    end;

end;

var datos, aux, sumas :fila;
    posicion, valor, posicionaux, valoraux :pila;
    largo, resultadodato, pos, val :integer;
    
begin
    
    writeln('Ingrese el/los valore/s de la fila datos : ');
    readfila(datos);
    
    inicfila(aux, '');
    
    writeln('Ingrese el/los valor/es de la pila posicion : ');
    readpila(posicion);
    
    writeln('Ingrese el/los valor/es de la pila valor : ');
    readpila(valor);
    
    inicpila(posicionaux, '');
    
    inicpila(valoraux, '');
    
    
    
    while not pilavacia(posicion) do begin {modifica la fila datos mientras que la pila posiciones no este vacia}
        
        if not pilavacia(valor) then begin { verifica que la pila valor no este vacia}
            
            agregar_valores(datos, tope(posicion), tope(valor)); { modifica la fila datos con los valores que estan en los topes de las pilas}
            
            apilar(valoraux, desapilar(valor)); {desapila el valor de la pila valor asi sigue con el proximo}
            apilar(posicionaux, desapilar(posicion)); { desapila el valor de la pila valor asi sigue con el proximo}
            
        end
        
        else begin { en caso de que la pila valores este vacia deapila todos los valores de la pila posiciones para que se termine el while}
        
            apilar(posicionaux, desapilar(posicion)); 
            
        end;
    
    end;
    
    writefila(datos);
    
end.