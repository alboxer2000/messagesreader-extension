(function(Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('Messages Reader must run unsandboxed');
    }
    class messagesread {
      getInfo() {
        return {
          id: 'messagesread',
          name: 'Messages Reader',
          blocks: [
            {
                opcode: 'getmessage',
                blockType: Scratch.BlockType.REPORTER,
                text: 'get messages count of [user]',
                arguments: {
                  'user': {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'griffpatch'
                  }
              },
            }
            ]
        };
      }
    // Block Code Here
    }
    Scratch.extensions.register(new messagesread());
  })(Scratch);