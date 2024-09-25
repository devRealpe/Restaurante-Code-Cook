db.cars.insertMany([
{ marca: 'Audi', modelo: 'Q5', anoFabricacion: 2023 , precio: 206990000 , consumoCombustible: 7.3 , color : 'windsor uva' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 265 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Fiat', modelo: 'Marea', anoFabricacion: 1999 , precio: 20000000 , consumoCombustible: 8.5 , color : 'violeta ingo' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 120 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'BMW', modelo: 'X3', anoFabricacion: 2019 , precio: 130000000 , consumoCombustible: 6.7 , color : 'gris militar' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 252 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Chevrolet', modelo: 'Spark', anoFabricacion: 2012 , precio: 38927100 , consumoCombustible: 5.2 , color : 'rojo caramesí' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 85 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Ford', modelo: 'Escape', anoFabricacion: 2017 , precio: 75000000 , consumoCombustible: 7.8 , color : 'azul oscuro' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 175 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Kia', modelo: 'Picanto', anoFabricacion: 2019 , precio: 50000000 , consumoCombustible: 4.9 , color : 'perla' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 84 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Jeep', modelo: 'Wranger', anoFabricacion: 2014 , precio: 114000000 , consumoCombustible: 9.8 , color : 'vino plomo' , pasajeros: 4 , tipoTransmision: 'Automática' ,potencia: 285 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Tesla', modelo: 'Model 3', anoFabricacion: 2021 , precio: 210000000 , consumoCombustible: 14 , color : 'gris sigilo' , pasajeros: 5 , tipoTransmision: 'Eléctrica' ,potencia: 340 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Subaru', modelo: 'Forester', anoFabricacion: 2024 , precio: 165900000 , consumoCombustible: 7.4 , color : 'verde taranto' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 182 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Volvo', modelo: 'XC40', anoFabricacion: 2025 , precio: 60000000 , consumoCombustible: 6.2 , color : 'gris claro' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 247 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Nissan', modelo: 'March', anoFabricacion: 2015 , precio: 33000000 , consumoCombustible: 5.4 , color : 'cereza roja' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 80 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Toyota', modelo: 'Hilux', anoFabricacion: 2013 , precio: 108500000 , consumoCombustible: 8.2 , color : 'arena rock' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 150 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Mini', modelo: 'F56', anoFabricacion: 2020 , precio: 103000000 , consumoCombustible: 6.1 , color : 'fresa' , pasajeros: 4 , tipoTransmision: 'Automática' ,potencia: 136 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Mercedes', modelo: 'Gle 450', anoFabricacion: 2022 , precio: 298000000 , consumoCombustible: 8.3 , color : 'blanco' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 362 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Ferrari', modelo: 'SF90', anoFabricacion: 2025 , precio: 3111331020 , consumoCombustible: 15.5 , color : 'gris arcilla' , pasajeros: 4 , tipoTransmision: 'Automática' ,potencia: 1000 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Mazda', modelo: 'CX-90', anoFabricacion: 2024 , precio: 273300000 , consumoCombustible: 8.1 , color : 'cobrizo metalico' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 340 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Lexus', modelo: 'Gx', anoFabricacion: 2003 , precio: 100000000 , consumoCombustible: 11.2 , color : 'uva oscuro metalizado' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 301 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'BYD', modelo: 'Quin', anoFabricacion: 2023 , precio: 117000000 , consumoCombustible: 5.5 , color : 'verde astoria' , pasajeros: 5 , tipoTransmision: 'Eléctrica' ,potencia: 150 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Opel', modelo: 'Grandland', anoFabricacion: 2022 , precio: 83990000 , consumoCombustible: 6.8 , color : 'azurit azul metalico' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 177 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Volkswagen', modelo: 'Tiguan', anoFabricacion: 2006 , precio: 30000000 , consumoCombustible: 8.1 , color : 'base azul medio metal.' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 150 , sistemaSeguridad: 'Airbags'  },
{ marca: 'Seat', modelo: 'Ibiza', anoFabricacion: 2009 , precio: 21340200 , consumoCombustible: 5.8 , color : 'base plata metal.' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 102 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Acura', modelo: 'MDX ', anoFabricacion: 2025 , precio: 331959426 , consumoCombustible: 8.5 , color : 'blanco fja verde azul naran' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 350 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Infiniti', modelo: 'Q45 Sedán', anoFabricacion: 2018 , precio: 319108555 , consumoCombustible: 9.2 , color : 'blanco / plata cool' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 335 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Hyundai ', modelo: 'Tucson', anoFabricacion: 2008 , precio: 34500000 , consumoCombustible: 7.9 , color : 'blanco alabasto' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 165 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Aion', modelo: 'GAC', anoFabricacion: 2016 , precio: 60780000 , consumoCombustible: 5.1 , color : 'esmeralda rojo formula' , pasajeros: 5 , tipoTransmision: 'Eléctrica' ,potencia: 180 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Chana', modelo: 'Star Truck', anoFabricacion: 2022 , precio: 92390990 , consumoCombustible: 10.5 , color : 'granito granito' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 120 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Leap', modelo: 'C10', anoFabricacion: 2014 , precio: 34231200 , consumoCombustible: 6.3 , color : 'jade' , pasajeros: 5 , tipoTransmision: 'Eléctrica' ,potencia: 130 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Lifan', modelo: '520', anoFabricacion: 2020 , precio: 43923932 , consumoCombustible: 6.8 , color : 'agua cristal' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 110 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Maxus', modelo: 'MIFA 9', anoFabricacion: 2012 , precio: 63200000 , consumoCombustible: 8.2 , color : 'lirio azul' , pasajeros: 5 , tipoTransmision: 'Eléctrica' ,potencia: 200 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'NIO', modelo: 'ET7', anoFabricacion: 2017 , precio: 131000000 , consumoCombustible: 6.2 , color : 'madera ceniza' , pasajeros: 5 , tipoTransmision: 'Eléctrica' ,potencia: 360 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Omoda', modelo: '5', anoFabricacion: 2014 , precio: 36000 , consumoCombustible: 6.5 , color : 'mercurio plata' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 150 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Rely', modelo: 'X5', anoFabricacion: 2011 , precio: 25321000 , consumoCombustible: 7.1 , color : 'agua marina' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 120 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Riich', modelo: 'M1', anoFabricacion: 2001 , precio: 12300000 , consumoCombustible: 8.9 , color : 'nuez metalico' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 100 , sistemaSeguridad: 'Airbags'  },
{ marca: 'Tiajin', modelo: 'FAW', anoFabricacion: 2007 , precio: 26130000 , consumoCombustible: 7.5 , color : 'pardo laguna' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 130 , sistemaSeguridad: 'Airbags'  },
{ marca: 'Brilliance', modelo: 'BS4', anoFabricacion: 2010 , precio: 35100000 , consumoCombustible: 7.8 , color : 'pale oak' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 150 , sistemaSeguridad: 'ABS, airbags'  },
{ marca: 'Changan', modelo: 'CS55', anoFabricacion: 2019 , precio: 89450000 , consumoCombustible: 7.2 , color : 'blanco verde amarillo azul' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 156 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Geely', modelo: 'Starray', anoFabricacion: 2025 , precio: 125340000 , consumoCombustible: 8.5 , color : 'blanco verde amarillo naranja' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 150 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'JAC', modelo: 'JS2', anoFabricacion: 2018 , precio: 42000000 , consumoCombustible: 6.9 , color : 'blanco verde amarillo y rojo' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 136 , sistemaSeguridad: 'ABS, ESP, airbags'  },
{ marca: 'Renault', modelo: 'Duster', anoFabricacion: 2008 , precio: 31250300 , consumoCombustible: 7.4 , color : 'purpura' , pasajeros: 5 , tipoTransmision: 'Manual' ,potencia: 110 , sistemaSeguridad: 'Airbags'  },
{ marca: 'SsangYong', modelo: 'Korando', anoFabricacion: 2010 , precio: 37900000 , consumoCombustible: 8.1 , color : 'rasberry' , pasajeros: 5 , tipoTransmision: 'Automática' ,potencia: 150 , sistemaSeguridad: 'ABS, airbags'  }
]);


db.cars.find().pretty()

//db.cars.find({ color: { $eq: 'uva oscuro metalizado' } })

//db.cars.find({ anoFabricacion: { $gt: 2010 } })

//db.cars.find({ precio: { $gte: 100000000 } })

//db.cars.find({ pasajeros: { $lt: 5 } })

//db.cars.find({ potencia: { $lte: 150 } })

//db.cars.find({ marca: { $ne: 'Ferrari' } })

//db.cars.find({ color: { $in: ['blanco', 'verde astoria', 'rasberry'] } })

//db.cars.find({ marca: { $nin: ['BMW', 'Mercedes', 'Audi'] } })

//db.cars.find({ marca: 'Ford', 'tipoTransmision': 'Automática' })

//db.cars.deleteOne({ modelo: 'Spark' })






