const cds = require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = cds.service.impl(function (){
  const { EmployeeSet } = this.entities;

  this.on ('CREATE', EmployeeSet, async (req) => {
     
    if(req.data.salaryAmount<50000 || req.data.Currency.code != 'USD'){
       req.error(400,'Salary must be Greater than 50000 USD');
    }

    console.log('Before CREATE/UPDATE EmployeeSet', req.data)
  });

  this.after('CREATE', EmployeeSet, (each)=>{
    console.log("Create operation successful");
  })
 
  this.on('UPDATE', EmployeeSet, async (req) => {
    const empid = req.data.ID;


    if(req.data.salaryAmount<50000 && req.data.Currency.code != 'USD'){
       req.error(400,'Salary must be Greater than 50000 USD');
    }
    const employee = await SELECT.one.from(EmployeeSet).where({ID:empid});
    console.log(employee);

    if(req.data.nameFirst != employee.nameFirst || req.data.loginName != employee.loginName){
        req.error(400,'Operation not allowed');
    }
  });

 this.after('UPDATE', EmployeeSet, async (data, req) => {
    req.info("Update operation successful");
});


  this.on('DELETE',EmployeeSet, async (req)=>{
     const empid = req.data.ID;
     const employee = await cds.run(SELECT.one.from(EmployeeSet).where({ID:empid}));
     console.log(employee);
     if(!employee){
      req.reject(400,`No employee found for ID:${empid}`);
     } 
    const nameFirst = employee.nameFirst;
    if( nameFirst.charAt(0) === 'S'){
        req.reject(400,'Rejected Operation');
    }
  });

    this.after('DELETE',EmployeeSet, async (req)=>{
     req.info('Update operation successful');
    }
  );

 });

