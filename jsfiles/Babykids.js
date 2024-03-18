
const mysql = require("mysql2");

/*const bk = document.querySelector("hello");*/


 function insertData(connection) {
  try {
    const data = [
      ['Value 1', 10, 3.14],
      ['Value 2', 20, 6.28],
      ['Value 3', 30, 9.42]
    ];

    // Insert multiple rows at once using bulk insert
     connection.query(`
      INSERT INTO Datastore (column1, column2, column3)
      VALUES ?
    `, [data]);

    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

const connection = mysql.createConnection({
    host: "localhost",
    user: "teeghee",
    password:"Checkmate123@@@",
    database:"sparkdatabase",
    multipleStatements:true

});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the MySQL server:', error);
        return;
      } else{

      }

       console.log('Connected to the MySQL server.');
      
       insertData(connection, (error)=>{
        if(error){
          console.log("fucked");
        }
        else{
          console.log("successful");
        }
       })

    console.log("executed");
   connection.end;
  });

  for(i = 0; i<10; i++){
    console.log(i);
  }