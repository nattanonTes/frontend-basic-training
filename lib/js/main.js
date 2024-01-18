"use strict";

(() => {
  "use strict";

  kintone.events.on("app.record.index.show", function (event) {
    const record = event.record;
    console.log(record);
    return event;
  });
})();