# know-before-you-go-backend

## [Our Team Collaboration Plan](https://docs.google.com/document/d/1V7n9cizHly3ELPtDL3QGJtLV4XdCqgeUgpqlbctfsoY/edit)

## Contributors:

  David Waiganjo  
  Don Bandy  
  Taylor White

## Project Idea

  Get background information on a prospective date and also ensuring your date goes well. Check on available events for the desired day, check on available restaurants, etc.

Database Schema
Person schema
 Name {string, required}
Age{Number,not required}
City{string, Required, City , might be associated to City_Event}
Gender{string,Not Required}
Email{string,Not Required}


Event Schema
Event name{string,not required}
Event Date{number,Required}
Event City{string,Required}

Relationships
One person can go to one or more events
One Event can have one or more people
