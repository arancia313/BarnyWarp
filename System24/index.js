if (confirm('Still continue?') === true) {
      console.log('string')
      (Function(Scratch)) {
          console.log('another string')
          if ((!Scratch.logic.activate) === true) {
                console.log('This extension needs to be unsandboxed to run!')
          }
      }
      alert('')
      return
}