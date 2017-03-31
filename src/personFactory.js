import {observable, computed, action, useStrict} from "mobx";

class PersonFactory {

   @observable
    persons = [];


 constructor() {

    this.persons = [];

    setInterval(this.fetchPersons.bind(this),10000);

   }

    @action
    fetchPersons() {
        fetch("http://localhost:4567/api/persons_changing")
            .then(res => res.json())
            .then(action(result => {
                this.persons.replace(result) }))
    }

   getPersons = () => {
     return this.persons;
   }
}

export default new PersonFactory();