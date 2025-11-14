using { ust.ruthwik.julakanti.DB as table } from '../db/Schema';

service MyService {

    entity EmployeeSet  as projection on table.Employees;

}
