namespace  ust.ruthwik.julakanti.resue ;

type Gender: String enum {
  M = 'Male';
  F= 'female';
}
type Email : String(255)@assert.format:'/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/';

type PhoneNumber : String(30)@assert.format : '/^\+[1-9]\d{1,14}$/';
