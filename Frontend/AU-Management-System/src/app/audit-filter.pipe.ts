import { Pipe, PipeTransform } from '@angular/core';
import { Audit } from './audit';

@Pipe({
  name: 'auditFilter'
})
export class AuditFilterPipe implements PipeTransform {

  transform(audits: Audit[], searchValue1: string, searchValue2: string, searchValue3: string): Audit[] {
    if(!audits || (! searchValue1  && !searchValue2  && !searchValue3)){
      return audits;
    }
    if(searchValue1 == null){
      searchValue1 = "";
    }
    if(searchValue2 == null){
      searchValue2 = "";
    }
    if(searchValue3 == null){
      searchValue3 = "";
    }
    return audits.filter(audit => {
      if(audit.oid.toString().toLowerCase().includes(searchValue1.toLowerCase()) &&  
        audit.user.toLowerCase().includes(searchValue2.toLowerCase()) && 
        audit.action.toLowerCase().includes(searchValue3.toLowerCase())
        ){
          return true;
      }
      return false;
    })
  }
}
