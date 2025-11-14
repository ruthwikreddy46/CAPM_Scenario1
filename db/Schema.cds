namespace ust.ruthwik.julakanti.DB;
using { cuid,Currency } from '@sap/cds/common';
using { ust.ruthwik.julakanti.resue.Gender as Gender,ust.ruthwik.julakanti.resue.PhoneNumber as PhoneNumber,ust.ruthwik.julakanti.resue.Email as Email } from './Common';

entity  Employees:cuid{
    nameFirst: String(40);
    nameMiddle:String(40);
    nameLast: String(40);
    nameInitials: String(40);
    Gender: Gender;
    Language:String(1);
    phoneNumber:PhoneNumber;
    Email:Email;
    loginName:String(12);
    Currency:Currency;
    salaryAmount: Decimal(10,2);
    accountNumber:String(16);
    bankId:String(8);
    bankName:String(64);
}

