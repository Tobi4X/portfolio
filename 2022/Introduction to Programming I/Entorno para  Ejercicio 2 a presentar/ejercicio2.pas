program ejercicio2;
{este programa ingresa una frase y busca cuantas palabras de la longitud elegida hay dentro de la frase}
const
    max = 100;

type 
    arreglo = array [1..max] of char;

var 
    pos,largo: integer;
    arr_sec:arreglo;

function cantidad(arr_sec:arreglo; largo:integer):integer; {busca la cantidad de palabras del largo ingresado}

var cantpalabras, cantletras, i:integer;

begin

    cantpalabras := 0;
    cantletras := 0;
    i := 1;
    
    while i <= max do begin
        
        while arr_sec[i] <> ' ' do begin
            cantletras := cantletras + 1;
            i := i + 1;
        end;
        {cuenta la cantidad de letras que lleva la palabra y si encuentra un espacio frena ya que la proxima letra perteneceria a otra palabra}
        
        if cantletras = largo then begin
            cantpalabras := cantpalabras + 1;
        end;
        {verifica si la palabra que acaba de contar tiene el largo elegido y si es asi suma una a la cantidad de palabras encontradas}
        
        cantletras := 0; {reinicia la cantidad de letras que contiene la palabra para la proxima busqueda}
        i := i + 1;
        
    end;
    
    cantidad := cantpalabras;
    
end;
    
begin

    for pos := 1 to max do begin
        arr_sec[pos] := ' ';
    end;
    {rellena los valores del arreglo con blancos}
    
    writeln('Ingrese una frase de hasta 100 caracteres.');
    
    for pos := 1 to max do begin
        write(pos,'. '); {indica que caracter vas a ingresar}
        readln(arr_sec[pos]); 
    end;
    
    write('Ingrese el largo de las palabras a buscar : ');
    readln(largo);
    writeln();
    writeln('Hay ', cantidad(arr_sec,largo), ' palabras con ', largo, ' letras en la frase ingresada');
    
end.