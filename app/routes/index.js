import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const m = Ember.Object.create({
      rsvpNumeroPessoas: 1
    });

    return m;
  }
});
