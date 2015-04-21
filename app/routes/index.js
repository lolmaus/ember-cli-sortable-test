import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      Ember.Object.create({name: 'Hello', content: 'World'}),
      Ember.Object.create({name: 'Goodbye', content: 'Sky'})
    ];
  }
});
