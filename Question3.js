let maintenance_logs = [(101, "2024-01-01", 500), (102, "2024-01-10", 300), (101, "2024-01-15", 700)]
let queries = [("2024-01-01", "2024-01-10"), ("2024-01-01", "2024-01-15")]

function maintainance(maintenance_logs, queries){
    
let arr = [];
for (let i = 0; i < queries.length; i++) {
    let total = 0;
    for (let j = 0; j < maintenance_logs.length; j++) {
        if (maintenance_logs[j][1] >= queries[i][0] && maintenance_logs[j][1] <= queries[i][1]) {
            total += maintenance_logs[j][2];
        }
        console.log(maintenance_logs[j][1]);
    }
    arr.push(total);
}
return arr
}
console.log(maintainance(maintenance_logs, queries));