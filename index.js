let startDate = 1995;
 let endDate = 2017;
class Driver {
    constructor(name, startDate){
        this.name = name ;
        this.startDate = new Date(startDate);
      }
      yearsExperienceFromBeginningOf(endDate) {
        this.endDate = new Date(endDate);
        return this.endDate.getFullYear() - this.startDate.getFullYear();
      }
    }
    
    class Route {
      constructor (startLocation, endLocation){
        this.startLocation = {horizontal : park, vertical : 34};
        this.endLocation = {horizontal : park, vertical : 45};
      }
      blocksTravelled() {
        return this.endLocation - this.startLocation ;
      }
    }
    
    