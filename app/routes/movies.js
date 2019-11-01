import Route from '@ember/routing/route';

export default Route.extend({
   init(){      
      this.get('store').createRecord('movies',{   
         type: 'movie',            
         id: 1,
         title: 'Terminator',
         year: '2003',
         description:'John Connor, a cybernetic soldier, travels back in time in order to execute his mission of protecting a drifter and his wife, Kate Brewster, from a robotic attack.'
     }); 
     this.get('store').createRecord('movies',{
         type: 'movie',  
         id: 2,
         title: 'Iron Man',
         year: '2008',
     });
     this.get('store').createRecord('movies',{
         type: 'movie',  
         id: 3,
         title: 'Mission Impossible',
         year: '2004',
     });

   },
   async model() {
      //obviously not using mirage here...never worked for me..need better examples.
      try {
         const todos = await this.get('store').findAll('movies');
         return resolve(todos);
      }
      catch (err) {
         console.warn(err);
      }
      function resolve(result){
         console.log(result.content);
         return result.content;
      }

   }
});
