import { Pipe, PipeTransform } from '@angular/core';
import { Opportunity } from './opportunity';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(opportunities: Opportunity[], searchValue1: string, searchValue2: string, searchValue3: string, searchValue4: string, searchValue5: Date, searchValue6: string): Opportunity[] {
    var tmp:string
    if(searchValue5 != null){
      tmp = searchValue5.toString();
    }
    else{
      tmp = "";
    }
    if(!opportunities || (! searchValue1  && !searchValue2  && !searchValue3  && !searchValue4  && !searchValue5  && !searchValue6)){
      return opportunities;
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
    if(searchValue4 == null){
      searchValue4 = "";
    }
    if(searchValue6 == null){
      searchValue6 = "";
    }
    return opportunities.filter(opportunity => {
      if(opportunity.id.toString().toLowerCase().includes(searchValue1.toLowerCase()) &&  
        opportunity.name.toLowerCase().includes(searchValue2.toLowerCase()) && 
        opportunity.skills.toLowerCase().includes(searchValue3.toLowerCase()) &&
        opportunity.locations.toLowerCase().includes(searchValue4.toLowerCase()) &&
        opportunity.ed.toString().toLowerCase().includes(tmp) &&
        opportunity.openings.toString().toLowerCase().includes(searchValue6.toLowerCase())){
        return true;
      }
      return false;
    })
  }

}
