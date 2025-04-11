/* CREATE DATABASE ejercicioProfe
    DEFAULT CHARACTER SET = 'utf8mb4'; */


CREATE TABLE firma_comercial
(
  nom_firma VARCHAR(10) PRIMARY KEY
)ENGINE=InnoDB;

CREATE TABLE adobs
(
  nom VARCHAR(20) PRIMARY KEY,
  nom_firma VARCHAR(10) NOT NULL,
  accio ENUM('LLD','AI') NOT NULL,
  Foreign Key (nom_firma) REFERENCES firma_comercial(nom_firma)
)ENGINE=InnoDB;

CREATE TABLE estacio
(
  nom_estacio VARCHAR(10) PRIMARY KEY
)ENGINE=InnoDB;

CREATE TABLE plantes
(
  nom_cientific VARCHAR(20) PRIMARY KEY,
  nom_popular VARCHAR(20) NOT NULL,
  floracio VARCHAR(10),
  Foreign Key (floracio) REFERENCES estacio(nom_estacio)
)ENGINE=InnoDB;

CREATE TABLE metode_reproduccio
(
  metode VARCHAR(10) PRIMARY KEY
)ENGINE=InnoDB;

CREATE TABLE planta_interior
(
  nom_planta VARCHAR(20) PRIMARY KEY, 
  ubicacio VARCHAR(20),
  temperatura SMALLINT(2),
  Foreign Key (nom_planta) REFERENCES plantes(nom_cientific)
)ENGINE=InnoDB;

CREATE TABLE planta_exterior
(
  nom_planta VARCHAR(20) PRIMARY KEY,
  tipus_planta ENUM('P','T'),
  Foreign Key (nom_planta) REFERENCES plantes(nom_cientific)
)ENGINE=InnoDB;


CREATE TABLE exemplar_planta
(
  nom_planta VARCHAR(20) ,
  num_exemplar SMALLINT(2),
  PRIMARY KEY (nom_planta, num_exemplar),
  Foreign Key (nom_planta) REFERENCES plantes(nom_cientific)
)ENGINE=InnoDB;



CREATE TABLE dosi_adobs
(
  nom_planta VARCHAR(20),
  nom_estacio VARCHAR(10),
  nom_adob VARCHAR(20),
  quantitat_adob SMALLINT(3) NOT NULL CHECK (quantitat_adob >=20 AND quantitat_adob <=100),
  FOREIGN KEY (nom_planta) REFERENCES plantes(nom_cientific),
  Foreign Key (nom_estacio) REFERENCES estacio(nom_estacio),
  FOREIGN KEY (nom_adob) REFERENCES adobs(nom),
  PRIMARY KEY (nom_planta, nom_estacio, nom_adob)
)ENGINE=InnoDB;
ALTER TABLE dosi_adobs MODIFY quantitat_adob SMALLINT(3) NOT NULL CHECK (quantitat_adob >=20 AND quantitat_adob <=100);

CREATE TABLE reproduccions
(
  nom_planta VARCHAR(20),
  metode_reproduccio VARCHAR(10),
  grau_exit CHAR(5),
  Foreign Key (nom_planta) REFERENCES plantes(nom_cientific),
  Foreign Key (metode_reproduccio) REFERENCES metode_reproduccio(metode),
  PRIMARY KEY (nom_planta, metode_reproduccio)

)ENGINE=InnoDB;

/*Firmas comerciales*/
INSERT INTO firma_comercial VALUES ('UOCADOB');
INSERT INTO firma_comercial VALUES ('TIRSADOB');
INSERT INTO firma_comercial VALUES ('PRISADOB');
INSERT INTO firma_comercial VALUES ('CIRSADOB');

/* Adobs */

INSERT INTO adobs VALUES ('Plantavit', 'UOCADOB', 'LLD');
INSERT INTO adobs VALUES ('Vitaplant', 'TIRSADOB', 'AI');
INSERT INTO adobs VALUES ('Nutreplant', 'CIRSADOB', 'LLD');
INSERT INTO adobs VALUES ('Creixplant', 'PRISADOB', 'AI');
INSERT INTO adobs VALUES ('Casadob', 'TIRSADOB', 'AI');
INSERT INTO adobs VALUES ('Superplant', 'PRISADOB', 'LLD');
INSERT INTO adobs VALUES ('Plantadob', 'CIRSADOB', 'AI');
INSERT INTO adobs VALUES ('Sanexplant', 'UOCADOB', 'LLD');

/* Estacio */

INSERT INTO estacio VALUES ('Hivern');
INSERT INTO estacio VALUES ('Primavera');
INSERT INTO estacio VALUES ('Estiu');
INSERT INTO estacio VALUES ('Tardor');

/* Planta */

INSERT INTO plantes VALUES ('Geranium','Gerani','Primavera');
INSERT INTO plantes VALUES ('Begonia rex','Begònia','Estiu');
INSERT INTO plantes VALUES ('Camellia','Camèlia','Primavera');
INSERT INTO plantes VALUES ('Cyclamen',' Ciclamen','Hivern');
INSERT INTO plantes VALUES ('Rosa','Roser','Primavera');
INSERT INTO plantes VALUES ('Polystichum','Falguera',null);
INSERT INTO plantes VALUES ('Tulipa','Tulipa','Primavera');
INSERT INTO plantes VALUES ('Chrysanthemum','Crisantem','Estiu');
INSERT INTO plantes VALUES ('Philodendron','Potus',null);
INSERT INTO plantes VALUES ('Chlorophytum','Cintes',null);
INSERT INTO plantes VALUES ('Euphorbia','Poinsetia','Hivern');
INSERT INTO plantes VALUES ('Hedera','Heura',null);
INSERT INTO plantes VALUES ('Ficus','Ficus Benjamina',null);
INSERT INTO plantes VALUES ('Codiaeum','Croton',null);

/* Metode reproduccio */

INSERT INTO metode_reproduccio VALUES ('Llavors');
INSERT INTO metode_reproduccio VALUES ('Esqueix');
INSERT INTO metode_reproduccio VALUES ('Estaques');
INSERT INTO metode_reproduccio VALUES ('Bulbs');
INSERT INTO metode_reproduccio VALUES ('Capficats');
INSERT INTO metode_reproduccio VALUES ('Estolons');


/* Planta interior */
INSERT INTO planta_interior VALUES ('Philodendron','Llum directa',15); 
INSERT INTO planta_interior VALUES ('Euphorbia','Llum indirecta',28); 
INSERT INTO planta_interior VALUES ('Ficus','Llum indirecta',19); 
INSERT INTO planta_interior VALUES ('Codiaeum','No corrents',17); 


/* Planta exterior */
INSERT INTO planta_exterior VALUES ('Geranium','P');
INSERT INTO planta_exterior VALUES ('Begonia rex','P');
INSERT INTO planta_exterior VALUES ('Camellia','P');
INSERT INTO planta_exterior VALUES ('Cyclamen','P');
INSERT INTO planta_exterior VALUES ('Rosa','P');
INSERT INTO planta_exterior VALUES ('Polystichum','P');
INSERT INTO planta_exterior VALUES ('Tulipa','T');
INSERT INTO planta_exterior VALUES ('Chrysanthemum','T');
INSERT INTO planta_exterior VALUES ('Chlorophytum','P');
INSERT INTO planta_exterior VALUES ('Hedera','P');


/* Exemplar planta */



INSERT INTO exemplar_planta VALUES ('Geranium',1);
INSERT INTO exemplar_planta VALUES ('Geranium',2);
INSERT INTO exemplar_planta VALUES ('Geranium',3);
INSERT INTO exemplar_planta VALUES ('Geranium',4);
INSERT INTO exemplar_planta VALUES ('Geranium',5);
INSERT INTO exemplar_planta VALUES ('Geranium',6);
INSERT INTO exemplar_planta VALUES ('Begonia rex',1);
INSERT INTO exemplar_planta VALUES ('Begonia rex',2);
INSERT INTO exemplar_planta VALUES ('Begonia rex',3);
INSERT INTO exemplar_planta VALUES ('Begonia rex',4);
INSERT INTO exemplar_planta VALUES ('Rosa',1);
INSERT INTO exemplar_planta VALUES ('Rosa',2);
INSERT INTO exemplar_planta VALUES ('Rosa',3);
INSERT INTO exemplar_planta VALUES ('Hedera',1);
INSERT INTO exemplar_planta VALUES ('Hedera',2);
INSERT INTO exemplar_planta VALUES ('Hedera',3);
INSERT INTO exemplar_planta VALUES ('Hedera',4);
INSERT INTO exemplar_planta VALUES ('Ficus',1);
INSERT INTO exemplar_planta VALUES ('Ficus',2);
INSERT INTO exemplar_planta VALUES ('Euphorbia',1);
INSERT INTO exemplar_planta VALUES ('Euphorbia',2);
INSERT INTO exemplar_planta VALUES ('Euphorbia',3);
INSERT INTO exemplar_planta VALUES ('Codiaeum',1);
INSERT INTO exemplar_planta VALUES ('Codiaeum',2);
INSERT INTO exemplar_planta VALUES ('Cyclamen',1);
INSERT INTO exemplar_planta VALUES ('Cyclamen',2);


/* dosi adob */

INSERT INTO dosi_adobs VALUES ('Geranium','Primavera','Casadob',30);
INSERT INTO dosi_adobs VALUES ('Geranium','Hivern','Vitaplant', 20);
INSERT INTO dosi_adobs VALUES ('Begonia rex','Estiu','Casadob', 25);
INSERT INTO dosi_adobs VALUES ('Camellia','Hivern','Plantavit', 50);
INSERT INTO dosi_adobs VALUES ('Camellia','Primavera','Casadob', 75);
INSERT INTO dosi_adobs VALUES ('Cyclamen','Tardor','Casadob', 30);
INSERT INTO dosi_adobs VALUES ('Chrysanthemum','Primavera','Casadob', 45);
INSERT INTO dosi_adobs VALUES ('Begonia rex','Primavera','Nutreplant', 50);
INSERT INTO dosi_adobs VALUES ('Rosa','Primavera','Casadob', 30);
INSERT INTO dosi_adobs VALUES ('Rosa','Primavera','Creixplant', 50);
INSERT INTO dosi_adobs VALUES ('Polystichum','Primavera','Casadob', 40);
INSERT INTO dosi_adobs VALUES ('Polystichum','Tardor','Plantadob', 20);
INSERT INTO dosi_adobs VALUES ('Tulipa','Hivern','Casadob', 40);
INSERT INTO dosi_adobs VALUES ('Philodendron','Primavera','Casadob', 40);
INSERT INTO dosi_adobs VALUES ('Chlorophytum','Tardor','Casadob', 30);
INSERT INTO dosi_adobs VALUES ('Chlorophytum','Hivern','Superplant', 40);
INSERT INTO dosi_adobs VALUES ('Euphorbia','Hivern','Casadob', 50);
INSERT INTO dosi_adobs VALUES ('Euphorbia','Hivern','Sanexplant', 40);
INSERT INTO dosi_adobs VALUES ('Hedera','Primavera','Casadob', 45);
INSERT INTO dosi_adobs VALUES ('Codiaeum','Primavera','Casadob', 60);
INSERT INTO dosi_adobs VALUES ('Codiaeum','Estiu','Casadob', 50);
INSERT INTO dosi_adobs VALUES ('Geranium','Estiu','Sanexplant', 40);
INSERT INTO dosi_adobs VALUES ('Ficus','Primavera','Casadob', 50);


/* Reproduccio*/

INSERT INTO reproduccions VALUES ('Geranium','Esqueix','Alt');
INSERT INTO reproduccions VALUES ('Begonia rex','Esqueix','Alt');
INSERT INTO reproduccions VALUES ('Begonia rex','Capficats','Alt');
INSERT INTO reproduccions VALUES ('Begonia rex','Llavors','Baix');
INSERT INTO reproduccions VALUES ('Rosa','Estaques','Mitjà');
INSERT INTO reproduccions VALUES ('Rosa','Bulbs','Alt');
INSERT INTO reproduccions VALUES ('Chlorophytum','Estolons','Alt');
INSERT INTO reproduccions VALUES ('Cyclamen','Esqueix','Alt');
INSERT INTO reproduccions VALUES ('Cyclamen','Capficats','Mitjà');
INSERT INTO reproduccions VALUES ('Philodendron','Capficats','Alt');
INSERT INTO reproduccions VALUES ('Philodendron','Esqueix','Alt');
INSERT INTO reproduccions VALUES ('Tulipa','Bulbs','Alt');
INSERT INTO reproduccions VALUES ('Ficus','Estaques','Baix');
INSERT INTO reproduccions VALUES ('Ficus','Capficats','Baix');
INSERT INTO reproduccions VALUES ('Ficus','Esqueix','Alt');
INSERT INTO reproduccions VALUES ('Codiaeum','Esqueix','Baix');
INSERT INTO reproduccions VALUES ('Codiaeum','Capficats','Mitjà');
INSERT INTO reproduccions VALUES ('Codiaeum','Bulbs','Alt');
INSERT INTO reproduccions VALUES ('Polystichum','Esqueix','Alt');
INSERT INTO reproduccions VALUES ('Hedera','Esqueix','Mitjà');
INSERT INTO reproduccions VALUES ('Chrysanthemum','Bulbs','Mitjà');
INSERT INTO reproduccions VALUES ('Camellia','Estaques','Alt');
INSERT INTO reproduccions VALUES ('Hedera','Capficats','Alt');
INSERT INTO reproduccions VALUES ('Euphorbia','Llavors','Baix');
INSERT INTO reproduccions VALUES ('Euphorbia','Esqueix','Baix');
INSERT INTO reproduccions VALUES ('Euphorbia','Estaques','Alt');


/*QUERY*/
USE ejercicioprofe;

/* Exercici 23:
Mostra el nom popular i el nom científic de les plantes que floreixen a l'estiu.*/

SELECT nom_popular, nom_cientific FROM plantes WHERE floracio = 'Estiu';

/*Exercici 24:
Mostra el nom científic de les plantes que utilitzen adob 'Casadob'.*/

SELECT DISTINCT nom_planta FROM dosi_adobs WHERE nom_adob ='Casadob';

/*
Exercici 25:
Mostra el nom dels adob de la firma comercial 'PRISADOB' i mostra també de quin tipus són.*/

SELECT nom, accio FROM adobs WHERE nom_firma = 'PRISADOB';

/*
Exercici 26:
Mostra les plantes que necessiten estar a una temperatura superior a 16oC.*/

SELECT nom_planta FROM planta_interior WHERE temperatura > 16;

/*
Exercici 27:
Mostra la quantitat total d'adob que hem de fer servir.*/

SELECT sum(quantitat_adob) FROM dosi_adobs; 

/*
Exercici 28:
Mostra el nom científic de les plantes que utilitzin una quantitat d'adob entre 40 i 50 (tots dos inclosos).*/

SELECT DISTINCT nom_planta FROM dosi_adobs where quantitat_adob BETWEEN 40 AND 50

/*
Exercici 29:
Mostra les plantes que se les ha abonat al hivern i a la tardor.*/

SELECT DISTINCT nom_planta FROM dosi_adobs where nom_estacio IN ('Hivern', 'Tardor');

/*
Exercici 30:
Mostra la mitjana d'adob Casadob amb que s'han abonat les plantes.*/

SELECT AVG(quantitat_adob) FROM dosi_adobs WHERE nom_adob = 'Casadob';

/*
Exercici 31:
Mostra el nom científic i el nom popular de les plantes que el seu nom popular conté una 'i'.*/

SELECT nom_cientific, nom_popular FROM plantes where nom_popular LIKE '%i%'

/*
Exercici 32:
Mostra la mitjana de temperatura a la que han d'estar les plantes d'interior.*/

SELECT AVG(temperatura) FROM planta_interior

/*
Exercici 33:
Mostra els adobs de les firmes comercials CIRSADOB i TIRSADOB. Mostra també a la firma a la que pertanyen.*/

SELECT nom, nom_firma FROM adobs WHERE nom_firma IN ('CIRSADOB' , 'TIRSADOB');

/*
Exercici 34:
Digues quants exemplars de plantes tenim.*/

SELECT COUNT(*) FROM exemplar_planta;

/*
Exercici 35:
Mostra la quantitat mínima i màxima d'adob que s'utilitza alguna vegada (en una sola consulta).*/

SELECT MIN(quantitat_adob), MAX(quantitat_adob) FROM dosi_adobs;

/*
Exercici 36:
Mostra la temperatura màxima a la que pot haver una planta d'interior.*/

SELECT max(temperatura) FROM planta_interior;

/*
Exercici 37:
Mostra les plantes que utilitzen adob 'Casadob' i un quantitat superior a 40 unitats.*/

SELECT DISTINCT nom_planta FROM dosi_adobs WHERE nom_adob='Casadob' AND quantitat_adob > 40;

/*
Exercici 38:
Mostra el nom científic de les plantes que tenim més de 4 exemplars.*/

SELECT nom_planta FROM exemplar_planta WHERE num_exemplar = 5;
SELECT nom_planta, COUNT(*) as numero FROM exemplar_planta GROUP BY nom_planta HAVING numero > 4;

/*
Exercici 39:
Mostra la quantitat total d'adob que utilitza la planta Euphorbia.*/

SELECT sum(quantitat_adob) FROM dosi_adobs WHERE nom_planta='Euphorbia'

/*
Exercici 40:
Mostra el nom científic de les plantes que s'han abonat a la primavera o les que han utilitzat adob 'Sanexplant'.*/

SELECT DISTINCT nom_planta FROM dosi_adobs WHERE nom_estacio = 'Primavera' OR nom_adob='Sanexplant';

/*
Exercici 41:
Mostra el nom científic de les plantes que utilitzen com a mètode de reproducció 'Esqueix' amb un grau d'èxit 'Alt'.*/

SELECT nom_planta FROM reproduccions WHERE grau_exit='Alt' AND metode_reproduccio='Esqueix';
 
/*
Exercici 42:
Mostra la quantitat total de vegades que tenim un grau d'exit 'Mitjà'. */

SELECT COUNT(*) FROM reproduccions WHERE grau_exit ='Mitjà';

/* Exercici 43:
Mostra el nom popular de les plantes que tenim algun exemplar que floreixi a l’estiu.*/

SELECT DISTINCT nom_popular FROM plantes a JOIN exemplar_planta b ON  a.nom_cientific=b.nom_planta WHERE a.floracio='Estiu'

/*Exercici 44:
Mostra el nom científic i el tipus de planta de les que són d’exterior que floreixen a la primavera.*/

SELECT a.nom_planta, a.tipus_planta FROM planta_exterior a JOIN plantes b ON a.nom_planta=b.nom_cientific WHERE b.floracio='Primavera';

/*
Exercici 45:
Mostra el nom científic de les plantes d’exterior que utilitzen adobs de la firma comercial CIRSADOB. Mostra també l’adob que utilitzen.*/

SELECT a.nom_planta, a.nom_adob FROM dosi_adobs a JOIN planta_exterior b ON a.nom_planta=b.nom_planta WHERE a.nom_adob IN (SELECT nom FROM adobs WHERE nom_firma = 'CIRSADOB');

/*
Exercici 46:
Mostra els mètodes de reproducció de les plantes que tenim exemplars.*/

SELECT DISTINCT a.metode_reproduccio FROM reproduccions a JOIN exemplar_planta b ON a.nom_planta=b.nom_planta;

/*
Exercici 47:
De les plantes que utilitzen adobs de la firma UOCADOB, mostra el nom popular i entre parèntesi la quantitat d’adob utilitzat (el resultat l'ha de mostrar en un sol camp).*/

SELECT CONCAT(a.nom_popular,' (' ,b.quantitat_adob,')') FROM plantes a JOIN dosi_adobs b ON a.nom_cientific=b.nom_planta WHERE b.nom_adob IN (SELECT nom FROM adobs WHERE nom_firma='UOCADOB');

/*
Exercici 48:
Mostra el nom popular i les mètodes de reproducció de les plantes que tenen la floració al hivern.*/

SELECT a.nom_popular, b.metode_reproduccio 
FROM plantes a JOIN reproduccions b 
ON a.nom_cientific=b.nom_planta 
WHERE a.floracio='Hivern';

/*
Exercici 49:
Mostra el nom científic i les cinc primeres lletres del nom popular de les plantes d’exterior que utilitzen el mètode de reproducció esqueix i les plantes d’interior que la seva reproducció té un grau d’èxit baix.*/

SELECT nom_cientific, LEFT(nom_popular, 5) 
FROM plantes a JOIN planta_exterior e JOIN reproduccions b JOIN planta_interior c 
ON a.nom_cientific=b.nom_planta AND b.nom_planta=c.nom_planta 
WHERE b.metode_reproduccio='Esqueix' AND b.grau_exit='Baix';
  

/*
Exercici 50:
Mostra el nom popular i la estació de floració de les plantes que utilitzen més de 40 unitats d’adob.*/

SELECT DISTINCT nom_popular, floracio 
FROM plantes a JOIN dosi_adobs b 
ON a.nom_cientific=b.nom_planta 
WHERE b.quantitat_adob > 40;

/*
Exercici 51:
Mostra el nom popular de les plantes d’interior que necessiten llum indirecta i les plantes d’exterior que són de temporada.*/

SELECT DISTINCT nom_popular 
FROM plantes a JOIN planta_interior b JOIN planta_exterior c
ON a.nom_cientific=b.nom_planta OR a.nom_cientific=c.nom_planta
WHERE b.ubicacio='Llum indirecta' AND c.tipus_planta='T';

/*
Exercici 52:
Mostra el nom científic i l’estació de floració de les plantes que tenim algun exemplar.*/

SELECT DISTINCT nom_cientific FROM plantes a JOIN exemplar_planta b ON a.nom_cientific=b.nom_planta 

/*
Exercici 53:
Mostra l’adob i la firma comercial que el comercialitza de les plantes que reben una quantitat d’adob entre 20 i 40 unitats (inclosos).*/

SELECT DISTINCT a.nom, a.nom_firma FROM adobs a JOIN dosi_adobs b ON a.nom=b.nom_adob WHERE b.quantitat_adob BETWEEN 20 AND 40;

/*
Exercici 54:
Mostra en majúscules el nom popular de les plantes que tenim exemplars que utilitzen adobs d’acció immediata.*/

SELECT DISTINCT UCASE(nom_popular) 
FROM plantes a JOIN dosi_adobs c JOIN adobs d 
ON a.nom_cientific=c.nom_planta AND c.nom_adob=d.nom
WHERE a.nom_cientific in (SELECT DISTINCT nom_planta FROM exemplar_planta)
AND d.accio='AI';

/*
Exercici 55:
Mostra el nom popular i la ubicació de les plantes d’interior de les que tenim algun exemplar.*/

SELECT nom_popular, ubicacio
FROM plantes a JOIN planta_interior b
ON a.nom_cientific=b.nom_planta
WHERE a.nom_cientific in (SELECT DISTINCT nom_planta FROM exemplar_planta);

/*
Exercici 56:
Mostra el nom popular, l’adob i la quantitat d’aquest més 10 unitats, de les plantes que utilitzen un adob de la firma PRISADOB o que la quantitat és menor o igual a 30 unitats.*/

SELECT DISTINCT nom_popular, nom_adob, quantitat_adob+10
FROM plantes a JOIN dosi_adobs b 
ON a.nom_cientific=b.nom_planta
WHERE b.nom_adob IN (SELECT nom FROM adobs WHERE nom_firma='PRISADOB')
OR b.quantitat_adob <= 30;



/*
Exercici 57:
Mostra el nom popular de les plantes que utilitzen un adob de acció immediata i que floreixen a la primavera..*/

SELECT DISTINCT nom_popular
FROM plantes a JOIN dosi_adobs b 
ON a.nom_cientific=b.nom_planta
WHERE a.floracio='Primavera' AND b.nom_adob IN (SELECT nom FROM adobs WHERE accio='AI');

/*
Exercici 58:
Mostra el nom científic i el mètode de reproducció de les plantes que no utilitzen l’adob Casadob.*/

SELECT a.nom_planta, b.metode_reproduccio
FROM dosi_adobs a JOIN reproduccions b
ON a.nom_planta=b.nom_planta
WHERE a.nom_adob <> 'Casadob';

/*
Exercici 59:
Mostra les estacions de floració de les quals tenim algun exemplar de planta.*/

SELECT DISTINCT floracio
FROM plantes a JOIN exemplar_planta b
ON a.nom_cientific=b.nom_planta;

/*
Exercici 60:
Mostra el nom popular, el mètode de reproducció i la primera lletra del grau d’èxit de les plantes que no tenen un grau d’èxit alt.*/

SELECT a.nom_popular, b.metode_reproduccio, LEFT(b.grau_exit,1)
FROM plantes a JOIN reproduccions b
ON a.nom_cientific=b.nom_planta
WHERE b.grau_exit <> 'Alt';

/*
Exercici 61:
Mostra el nom de les plantes que se’ls hi ha afegit adob en la mateixa estació que la seva floració.*/

SELECT DISTINCT nom_cientific
FROM plantes a JOIN dosi_adobs b
ON a.nom_cientific=b.nom_planta AND a.floracio=b.nom_estacio
/*
Exercici 62:
Mostra en minúscules el nom científic de les plantes d’exterior que utilitzen adobs de la firma CIRSADOB i les plantes d’interior que utilitzen el mètode de reproducció per capficats. */

SELECT LCASE(a.nom_planta) 
FROM dosi_adobs a JOIN planta_exterior b
ON (a.nom_planta=b.nom_planta)
WHERE a.nom_adob IN (SELECT nom FROM adobs WHERE nom_firma='CIRSADOB')
UNION
SELECT LCASE(c.nom_planta)
FROM reproduccions c JOIN planta_interior d
ON c.nom_planta=d.nom_planta
WHERE c.metode_reproduccio='Capficats'
