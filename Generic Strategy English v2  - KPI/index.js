

// initiate jsstore connection
// var connection = new JsStore.Connection();
var connection = new JsStore.Instance(new Worker('jsstore.worker.js'))

// step1 - create database schema
var tblProduct = {
    name: 'Product',
    columns: {
        // Here "Id" is name of column 
        Id:{ primaryKey: true, autoIncrement: true },
        ItemName:  { notNull: true, dataType: "string" },
        Price:  { notNull: true, dataType: "number" },
        Quantity : { notNull: true, dataType: "number" }
    }
};

var tblOrder = {
    name: 'Order',
    columns: {
        // Here "OrderId" is name of column 
        OrderId:{ primaryKey: true, autoIncrement: true }
    }
};

var db = {
      name: "StrategyDb",
      tables: [tblProduct, tblOrder]
}





function getDatabase() {  
    var tblStudent = {  
        name: "Student",  
        columns: [{  
                name: "Id",  
                primaryKey: true,  
                autoIncrement: true  
            },  
            {  
                name: "Name",  
                notNull: true,  
                dataType: "string"  
            },  
            {  
                name: "Gender",  
                dataType: "string",  
                default: 'male'  
            },  
            {  
                name: "Country",  
                notNull: true,  
                dataType: "string"  
            },  
            {  
                name: "City",  
                notNull: true  
            }  
        ]  
    }  
    var dataBase = {  
        name: "Students",  
        tables: [tblStudent]  
    }  
    return dataBase;  
}  

function initiateDb() {  
    var DbName = "Students";  
    connection.isDbExist(DbName).then(function(isExist) {  
        if (isExist) {  
            connection.openDb(DbName).then(function() {  
                console.log('db opened');  
            });  
            showTableData();  
        } else {  
            var DataBase = getDatabase();  
            connection.createDb(DataBase).then(function(tables) {  
                console.log(tables);  
            });  
        }  
    }).catch(function(err) {  
        console.log(err);  
        alert(err.message);  
    });  
} 

// initJsStore()

initiateDb()

// async function start() {
 
//     var isDbCreated = await connection.initDb(db);

//     connection.initDb(db).then(e=>{
//         console.log(e)
//     })

//  }

//  start()




