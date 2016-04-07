// Note:
// Looptar wasn't inspired by Loktar but it was later found to function
// the same as loktar, when drunk he likes to break things.


export default class Looptar{
    // Allows multiple looptars to exist.
    constructor(opts){
      this.opts  = Object.assign({
        // Break after 1000ms
        breakAfter: 1000,
      }, opts);
      this.loops = {};
    }

    // One iteration
    // @TODO: Find if optimizing Date.now() is even possible
    iterates(id){
      this.loops[id] = this.loops[id] || {
        startedAt: Date.now()
      };

      const {startedAt} = this.loops[id];
      const {breakAfter}  = this.opts;
      const currentlyAt = Date.now();
      if( currentlyAt - startedAt > this.opts.breakAfter ){
        this._breakLoop();
      }
    }

    // This should be called after your loop exits
    // or bad thing will happen the next time it goes in.
    exits(id){
      this.loops[id] = null;
    }

    // Break the loop!
    _breakLoop(){
      throw new Error('Loop took too long to complete');
    }
}
