program practicoEspecial;


uses 
    Dos, sysutils;


type
    usuario = string[8];
    clave = string[8];
    st50 = string[50];


    tipo_dia_hora = string[22];

    
    puntArchArbol = ^nodoArchArbol;
    nodoArchArbol = record
        user :usuario;
        pass :clave;
        apNom :string[30];
        tipo :boolean;
    end;


    puntArchActividades = ^nodoArchActividades;
    nodoArchActividades = record
        id :integer;
        titulo :st50;
        descripcion :string;
    end;


    puntArchVisitas = ^nodoArchVisitas;
    nodoArchVisitas = record
        user :usuario;
        id :integer;
        fecha :tipo_dia_hora;
    end;


    archArboles = file of puntArchArbol;
    
    
    archActividades = file of puntArchActividades;
    
    
    archVisitas = file of puntArchVisitas;


    puntVisitas = ^nodoVisitas;
    nodoVisitas = record
        user :usuario;
        id :integer;
        fecha :tipo_dia_hora;
        antUser, antAct :puntVisitas;
    end;

    
    puntArbol = ^nodoArbol;
    nodoArbol = record
        user :usuario;
        pass :clave;
        apNom :string[30];
        tipo :boolean;
        listaVisitas :puntVisitas;
        der, izq :puntarbol;
    end;
    
    
    puntActividades = ^nodoActividad;
    nodoActividad = record
        id :integer;
        titulo :st50;
        descripcion :string;
        listaVisitas :puntVisitas;
        ant, sig :puntActividades;
    end;


//////////////////////////////////////////////////////////////////////////////// 
function ahora_en_string():tipo_dia_hora;
var
    anio, mes, dia, diaSem, hora, minutos, segundos, centesimas : Word;
begin
    GetDate( anio, mes, dia, diaSem);
    GetTime(hora,minutos, segundos, centesimas);
    ahora_en_string := Format('%4.4d-%2.2d-%2.2d %2.2d:%2.2d:%2.2d %2.2d',
                            [anio,mes,dia, hora, minutos, segundos, centesimas]);
end;
   
    
////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////  


procedure traducirNodoVisitas(var lista:puntVisitas; var nodo:puntArchVisitas);
    
begin
    nodo^.user := lista^.user;
    nodo^.id := lista^.id;
    nodo^.fecha := lista^.fecha;
end;    
    
    
////////////////////////////////////////////////////////////////////////////////     


procedure visitasActividadesArchivo(var archivo:archVisitas; var lista:puntVisitas; var nodo:puntArchVisitas);

begin
    while lista^.antAct <> NIL do begin
        traducirNodoVisitas(lista, nodo);
        write(archivo, nodo);
        lista := lista^.antAct;
    end;
end;
    
    
////////////////////////////////////////////////////////////////////////////////   


procedure guardarVisitasActividades(var archivo:archVisitas; var lista:puntActividades);

var nodo:puntArchVisitas;

begin
    rewrite(archivo);
    while lista^.sig <> nil do begin
        visitasActividadesArchivo(archivo, lista^.listaVisitas, nodo);
        lista := lista^.sig;
    end;
end;

  
function buscarUser(var user :usuario; var arbol:puntArbol):puntArbol;

begin
    if arbol = nil then
        buscarUser := nil
    else if arbol^.user = user then
        buscarUser := arbol
    else if arbol^.user < user then
        buscarUser := buscarUser(user, arbol^.der)
    else
        buscarUser := buscarUser(user, arbol^.izq);
end;
  
  
function buscarActividad(var lista :puntActividades; var id:integer):puntActividades;

begin
    while lista^.ant <> NIL DO begin
        lista := lista^.ant;
    end;
    while (lista^.sig <> NIL) and (lista^.id <> id) DO begin
        lista := lista^.sig;
    end;
    buscarActividad := lista;
end;  
  

////////////////////////////////////////////////////////////////////////////////  


procedure recrearVisitas(var arbol :puntArbol; var lista:puntActividades; var nodoArch:puntArchVisitas);

var nodo :puntVisitas;

begin
    new(nodo);
    nodo^.id := nodoArch^.id;
    nodo^.user := nodoArch^.user;
    nodo^.antAct := buscarUser(nodo^.user, arbol)^.listaVisitas;
    nodo^.antUser := buscarActividad(lista, nodo^.id)^.listaVisitas;
    nodo^.fecha := nodoArch^.fecha;
    lista^.listaVisitas := nodo;
    arbol^.listaVisitas := nodo;
end;


////////////////////////////////////////////////////////////////////////////////


procedure extraerArchivoVisitas(var archivo:archVisitas; var lista:puntActividades; nodo:puntArchVisitas; var arbol:puntArbol);

begin
    while not eof(archivo) do begin
        read(archivo, nodo);
        recrearVisitas(arbol, lista, nodo);
    end;
end;


////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////  


procedure traducirNodoArbol(var arbol :puntArbol; var nodo :puntArchArbol);

begin
    new(arbol);
    arbol^.user := nodo^.user;
    arbol^.pass := nodo^.pass;
    arbol^.apNom := nodo^.apNom;
    arbol^.tipo := nodo^.tipo;
    arbol^.listaVisitas := NIL;
    arbol^.izq := NIL;
    arbol^.der := NIL;
end;
    
    
////////////////////////////////////////////////////////////////////////////////     


procedure arbolArchivo(var archivo:archArboles; var arbol:puntArbol; var nodo:puntArchArbol);

begin
    if arbol <> nil then begin
        arbolArchivo(archivo, arbol^.izq, nodo);
        traducirNodoArbol(arbol, nodo);
        write(archivo, nodo);
        arbolArchivo(archivo, arbol^.der, nodo);
    end;
end;
    
    
////////////////////////////////////////////////////////////////////////////////   


procedure guardarArbol(var archivo:archArboles; var arbol:puntArbol);

var nodo:puntArchArbol;

begin
    rewrite(archivo);
    arbolArchivo(archivo, arbol, nodo);
end;


////////////////////////////////////////////////////////////////////////////////  


procedure traducirpuntArchivo(var arbol:puntArbol; var nodo:puntArchArbol);
    
begin
    nodo^.user := arbol^.user;
    nodo^.pass := arbol^.pass;
    nodo^.apNom := arbol^.apNom;
    nodo^.tipo := arbol^.tipo;
end;
    
  
////////////////////////////////////////////////////////////////////////////////  


procedure recrearArbol(var arbol:puntArbol; var nodo:puntArchArbol);

begin
    if arbol = NIL then
        traducirpuntArchivo(arbol, nodo)
    else if arbol^.user > nodo^.user then
        recrearArbol(arbol^.der, nodo)
    else
        recrearArbol(arbol^.izq, nodo)
end;


////////////////////////////////////////////////////////////////////////////////


procedure extraerArchivoArbol(var archivo:archArboles; var arbol:puntArbol; nodo:puntArchArbol);

begin
    while not eof(archivo) do begin
        read(archivo, nodo);
        recrearArbol(arbol, nodo);
    end;
end;
    

////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////  


procedure traducirNodoActArchivo(var lista:puntactividades; var nodo:puntArchActividades);

begin
    new(lista);
    lista^.titulo := nodo^.titulo;
    lista^.descripcion := nodo^.descripcion;
    lista^.listaVisitas := NIL;
    lista^.sig := NIL;
    lista^.ant := NIL;
end;


////////////////////////////////////////////////////////////////////////////////  


procedure traducirNodoActividades(var lista:puntActividades; var nodo:puntArchActividades);
    
begin
    nodo^.titulo := lista^.titulo;
    nodo^.descripcion := lista^.descripcion;
end;    
    
    
////////////////////////////////////////////////////////////////////////////////     


procedure actividadesArchivo(var archivo:archActividades; var lista:puntActividades; var nodo:puntArchActividades);

begin
    while lista^.sig <> NIL do begin
        traducirNodoActividades(lista, nodo);
        write(archivo, nodo);
        lista := lista^.sig;
    end;
end;
    
    
////////////////////////////////////////////////////////////////////////////////   


procedure guardarActividades(var archivo:archActividades; var lista:puntActividades);

var nodo:puntArchActividades;

begin
    rewrite(archivo);
    actividadesArchivo(archivo, lista, nodo);
end;

  
////////////////////////////////////////////////////////////////////////////////  


procedure recrearActividades(var lista:puntActividades; var nodo:puntArchActividades);

var nuevoNodo:puntActividades;

begin
    if lista = NIL then begin
        new(nuevoNodo);
        lista := nuevoNodo;
        nuevoNodo^.ant := NIL;
        lista^.titulo := nodo^.titulo;
        lista^.descripcion := nodo^.descripcion;
        lista^.sig := NIL;
    end
    else begin
        new(nuevoNodo);
        lista^.sig := nuevoNodo;
        nuevoNodo^.ant := lista;
        lista := lista^.sig;
        lista^.titulo := nodo^.titulo;
        lista^.descripcion := nodo^.descripcion;
        lista^.listaVisitas := NIL;
        lista^.sig := NIL;
    end;
    
end;


////////////////////////////////////////////////////////////////////////////////


procedure extraerArchivoActividades(var archivo:archActividades; var lista:puntActividades; nodo:puntArchActividades);

begin
    while not eof(archivo) do begin
        read(archivo, nodo);
        recrearActividades(lista, nodo)
    end;
end;
    

procedure exit(var arbol :puntArbol; var lista :puntActividades; var estructura :puntVisitas; var archArbol :archArboles; var archLista :archActividades; var archEstructura :archVisitas);

begin
    guardarArbol(archArbol, arbol);
    guardarActividades(archLista, lista);
    guardarVisitasActividades(archEstructura, lista);
end;


////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////


procedure crearNodo(var arbol:puntArbol; var user :usuario; var pass :clave; var apNom :st50; var tipoo :integer);

begin
    new(arbol);
    arbol^.user := user;
    arbol^.pass := pass;
    arbol^.apNom := apNom;
    if tipoo = 1 then
        arbol^.tipo := true
    else
        arbol^.tipo := false;
    arbol^.listaVisitas := NIL;
    arbol^.izq := NIL;
    arbol^.der := NIL;
end;


procedure crearArbol(var arbol:puntArbol; var user :usuario; var pass :clave; var apNom:st50; var tipoo:integer);

begin
    if arbol = NIL then
        crearNodo(arbol, user, pass, apNom, tipoo)
    else if arbol^.user > user then
        crearArbol(arbol^.izq, user, pass, apNom, tipoo)
    else
        crearArbol(arbol^.der, user, pass, apNom, tipoo)
end;


procedure newUser(var arbol :puntArbol);

var user :usuario;
    pass :clave;
    apNom :string[30];
    tipoo :integer;
    
begin
    write('Ingrese un usuario de maximo 8 caracteres : ');
    readln(user);
    writeln();
    write('Ingrese una contraseña de maximo 8 caracteres : ');
    readln(pass);
    writeln();
    write('Ingrese un Nombre y Apellido de maximo 30 caracteres : ');
    readln(apNom);
    writeln();
    write('Si usted es docente ingrese 1, si es alumno ingrese 2 : ');
    readln(tipoo);
    writeln();
    if buscarUser(user, arbol) = NIL then
        crearArbol(arbol, user, pass, apNom, tipoo);
end;


function verificarPass(var pass, passIngresada :clave) :boolean;

begin
    if pass = passIngresada then
        verificarPass := true
    else
        verificarPass := false
end;


procedure  mostrarActividades(var actividades :puntActividades);

var i: integer;

begin
    i:=1;
    
    while (actividades <> NIL) and (actividades^.sig <> NIL) do begin
        writeln(i, '. id : ', actividades^.id, ' titulo : ', actividades^.titulo);
        i += 1;
    end;
    
end;


procedure opcionesAlumnos(var opcion:integer; var arbol :puntArbol; var actividades :puntActividades);

begin
    mostrarActividades(actividades);
    writeln('Elija una opcion: ');
    writeln('1. Visitar');
    writeln('2. Logout');
    read(opcion);
    if (opcion <> 1) and (opcion <> 2) then
        opcionesAlumnos(opcion, arbol, actividades);
end;


procedure agregarVisita(var arbol, lista:puntVisitas; var id :integer; var user :usuario);

var nodo :puntVisitas;

begin
    new(nodo);
    nodo^.id := id;
    nodo^.user := user;
    nodo^.antAct := arbol;
    nodo^.antUser := lista;
    nodo^.fecha := ahora_en_string();
    lista := nodo;
    arbol := nodo;
end;


procedure visitar(var arbol :puntArbol; var lista :puntActividades; var estructura :puntVisitas);

var id:integer;

begin
    write('Ingrese el id de la actividad a visitar : ');
    read(id);
    buscarActividad(lista, id);
    if lista^.id <> id then begin
        writeln('Porfavor ingrese un id valido');
        visitar(arbol, lista, estructura);
    end
    else begin
        writeln('Titulo : ', lista^.titulo, 'Descripcion : ', lista^.descripcion);
        agregarVisita(arbol^.listaVisitas, lista^.listaVisitas, id, arbol^.user);
    end;
end;


procedure nuevaActividad(var id: integer; var titulo :st50; var descripcion :string; var lista :puntActividades);

var nodo:puntActividades;

begin
    new(nodo);
    nodo^.id := id;
    nodo^.titulo := titulo;
    nodo^.descripcion := descripcion;
    nodo^.listaVisitas := NIL;
    nodo^.ant := lista;
    nodo^.sig := NIL;
    lista^.sig := nodo
end;


procedure agregar(var lista :puntActividades);

var id:integer;
    titulo :st50;
    descripcion :string;

begin
    write('Ingrese el id de la actividad a agregar : ');
    read(id);
    buscarActividad(lista, id);
    if (lista^.id <> id) and (lista^.sig = NIL) then begin
        write('Ingrese el titulo : ');
        readln(titulo);
        writeln();
        write('Ingrese la descripcion : ');
        readln(titulo);
        writeln();
        nuevaActividad(id,titulo,descripcion,lista);
    end
    else begin
        writeln('Porfavor ingrese un id valido');
        agregar(lista);
    end;
end;


procedure modificarTitulo(var lista :puntActividades);

var id:integer;
    titulo :st50;

begin
    write('Ingrese el id de la actividad a modificar : ');
    read(id);
    buscarActividad(lista, id);
    if lista^.id = id then begin
        write('Ingrese el  nuevo titulo : ');
        readln(titulo);
        writeln();
        lista^.titulo := titulo
    end
    else begin
        writeln('Porfavor ingrese un id valido');
        modificarTitulo(lista);
    end;
end;


procedure modificarDescripcion(var lista :puntActividades);

var id:integer;
    descripcion :string;

begin
    write('Ingrese el id de la actividad a modificar : ');
    read(id);
    buscarActividad(lista, id);
    if lista^.id = id then begin
        write('Ingrese la  nueva descripcion : ');
        readln(descripcion);
        writeln();
        lista^.descripcion := descripcion;
    end
    else begin
        writeln('Porfavor ingrese un id valido');
        modificarTitulo(lista);
    end;
end;


procedure buscarPos(var lista :puntActividades; var id, pos:integer);

begin
    pos := 1;
    
    while lista^.ant <> NIL do begin
        lista := lista^.ant;
    end;
    while lista^.id <> id do begin
        pos += 1;
        lista := lista^.sig;
    end;
end;


procedure repos(var lista :puntActividades; var pos, newPos :integer);

var aux :puntActividades;

begin
    lista^.sig^.ant := lista^.ant;
    lista^.ant^.sig := lista^.sig;
    aux := lista^.sig;
    
    while aux^.ant <> nil do begin
        aux := aux^.ant;
    end;
    
    pos := 1;
    
    while pos < newPos do begin
        aux := aux^.sig;
        pos += 1;
    end;
    
    aux^.ant^.sig := lista;
    lista^.ant := aux^.ant;
    aux^.ant := lista;
    lista^.sig := aux;
end;


procedure ordenar(var lista:puntActividades);

var id:integer;
    descripcion :string;
    pos, newPos :integer;

begin
    write('Ingrese el id de la actividad a modificar : ');
    read(id);
    buscarActividad(lista, id);
    if lista^.id = id then begin
        buscarPos(lista, id, pos);
        writeln('La posicion actual es : ', pos);
        write('Ingrese la nueva posicion : ');
        readln(newPos);
        writeln();
        repos(lista, pos, newpos);
    end
    else begin
        writeln('Porfavor ingrese un id valido');
        ordenar(lista);
    end;
end;


procedure contarVisitas(var lista :puntActividades; var visitas :integer);

begin
    while lista^.listaVisitas^.antUser <> NIL do begin
        lista^.listaVisitas := lista^.listaVisitas^.antUser;
        visitas += 1;
    end;
end;


procedure actVisitada(var lista:puntActividades);

var aux :puntActividades;
    visitas, mayor :integer;
    
begin
    mayor := 0;
    while lista^.sig <> NIL do begin
        visitas := 0;
        contarVisitas(lista, visitas);  
        if visitas > mayor then begin
            mayor := visitas;
            aux := lista;
        end;
    end;
    
    writeln('La actividad mas visitada es : ', aux^.titulo, ' con un total de ', mayor, ' visitas.')
    
end;


procedure contarVisitasAlumno(var arbol :puntArbol; var visitas :integer);

begin
    while arbol^.listaVisitas^.antAct <> NIL do begin
        arbol^.listaVisitas := arbol^.listaVisitas^.antAct;
        visitas += 1;
    end;
end;


procedure buscarAlumno(var arbol, aux:puntArbol; var mayor :integer);

var visitas :integer;

begin
    visitas := 0;
    if (arbol <> nil) then begin
        buscarAlumno (arbol^.izq, aux, mayor);
        contarVisitasAlumno(arbol, visitas);
        if visitas > mayor then begin
            mayor := visitas;
            aux := arbol;
        end;
        buscarAlumno (arbol^.der, aux, mayor);
    end;
end;

procedure alumnoVisitado(var arbol :puntArbol);

var aux :puntArbol;
    visitas :integer;
    
begin
    visitas := 0;
    buscarAlumno(arbol, aux, visitas);
    writeln('El alumnos con mas visitas es : ', aux^.user, ' con un total de ', visitas, ' visitas.')
    
end;


procedure opcionesDocente(var opcion:integer; var arbol :puntArbol; var actividades :puntActividades);

begin
    mostrarActividades(actividades);
    writeln('Elija una opcion: ');
    writeln('1. Agregar una actividad');
    writeln('2. Modificar titulo');
    writeln('3. Modificar descripción');
    writeln('4. Ordenar una actividad');
    writeln('5. Mostrar la actividad más visitada');
    writeln('6. Mostrar el Alumno con más visitas');
    writeln('7. Logout');
    read(opcion);
    if (opcion <> 1) and (opcion <> 2) and (opcion <> 3) and (opcion <> 4) and (opcion <> 5) and (opcion <> 6) and (opcion <> 7) then
        opcionesDocente(opcion, arbol, actividades);
end;


procedure menu2(var arbol, arbolInicio :puntArbol; var lista :puntActividades; var estructura :puntVisitas; var archArbol :archArboles; var archLista :archActividades; var archEstructura :archVisitas);

var opcion:integer;

begin
    if arbol^.tipo = true then begin
        writeln('Apellido y Nombre : ',arbol^.apNom);
        writeln('Perfil : Docente');
        opcionesDocente(opcion, arbol, lista);
        if opcion = 1 then
            agregar(lista);
        if opcion = 2 then
            modificarTitulo(lista);
        if opcion = 3 then
            modificarDescripcion(lista);
        if opcion = 4 then
            ordenar(lista);
        if opcion = 5 then
            actVisitada(lista);
        if opcion = 6 then
            alumnoVisitado(arbol);
        if opcion = 7 then
            writeln('Usuario Cerrado');
    end
    else begin
        writeln('Apellido y Nombre : ',arbol^.apNom);
        writeln('Perfil : Alumno');
        opcionesAlumnos(opcion, arbol, lista);
        if opcion = 1 then
            visitar(arbol, lista, estructura);
        if opcion = 2 then
            writeln('Usuario Cerrado');
    end;
end;

procedure login(var arbol :puntArbol; var lista :puntActividades; var estructura :puntVisitas; var archArbol :archArboles; var archLista :archActividades; var archEstructura :archVisitas);

var user :usuario; 
    pass :clave;
    arbolAux :puntArbol;
    esta:boolean;

begin
    esta := false;
    write('Ingrese el usuario : ');
    readln(user);
    writeln;
    write('Ingrese la contraseña : ');
    readln(pass);
    writeln;
    arbolAux := buscarUser(user, arbol);
    if (arbol = nil) or (arbolAux^.user <> user) then begin
        writeln('ingrese un usuario valido');
        login(arbol, lista, estructura, archArbol, archLista, archEstructura);
    end
    else
        if verificarPass(arbolAux^.pass, pass) then
            menu2(arbolAux, arbol, lista, estructura, archArbol, archLista, archEstructura)
        else begin
            writeln('La contraseña es incorrecta');
            login(arbol, lista, estructura, archArbol, archLista, archEstructura);
        end;
end;


procedure opciones1(var opcion:integer);
begin
    writeln('Ingrese una opcion: ');
    writeln('1. Login');
    writeln('2. Nuevo Usuario');
    writeln('3. Exit');
    read(opcion);
    if (opcion <> 1) and (opcion <> 2) and (opcion <> 3) then
        opciones1(opcion)
end;


procedure menu1(var arbol :puntArbol; var lista :puntActividades; var estructura :puntVisitas; var archArbol :archArboles; var archLista :archActividades; var archEstructura :archVisitas);

var opcion:integer;

begin
    opciones1(opcion);
    if opcion = 1 then
        login(arbol, lista, estructura, archArbol, archLista, archEstructura);
    if opcion = 2 then
        newUser(arbol);
    if opcion = 3 then
        exit(arbol, lista, estructura, archArbol, archLista, archEstructura)
    else 
        menu1(arbol, lista, estructura, archArbol, archLista, archEstructura);
end;

var arbol :puntArbol;
    lista :puntActividades;
    estructura :puntVisitas;
    archArbol :archArboles;
    archLista :archActividades;
    archEstructura :archVisitas;
    nodoArboll :puntArchArbol;
    nodoActividadess :puntArchActividades;
    nodoVisitass :puntArchVisitas;

begin
    assign(archArbol,'/work/archArbolTobiasJensen.dat');
    assign(archLista,'/work/archListaTobiasJensen.dat');
    assign(archEstructura,'/work/archEstructuraTobiasJensen.dat');
    reset(archArbol);
    reset(archLista);
    reset(archEstructura);
    extraerArchivoArbol(archArbol, arbol, nodoArboll);
    extraerArchivoActividades(archLista, lista, nodoActividadess);
    extraerArchivoVisitas(archEstructura, lista, nodoVisitass ,arbol);
    menu1(arbol, lista, estructura, archArbol, archLista, archEstructura);
end.