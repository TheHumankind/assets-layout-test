const popBG = document.getElementById('popBackground');
const notificationMessage = document.getElementById('notification');
const popForm = document.getElementById('popForm');

const rejectBtn = document.getElementById('disagreeBtn');
const agreeBtn = document.getElementById('agreeBtn');

const form = document.getElementById('form');

const dateField = document.getElementById('date');

rejectBtn.addEventListener('click', () => {
    popBG.classList.remove('on');
});

agreeBtn.addEventListener('click', () => {
    notificationMessage.classList.remove('on');
    popForm.classList.add('on');
});

// dateField.addEventListener('keydown', (e) => {
//     let v = e.target.value;
//     if (v.match(/^\d{2}$/) !== null) {
//         e.target.value = v + '/';
//     } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
//         e.target.value = v + '/';
//     }
// });

// var dateMask = IMask(dateField, {
//     mask: Date,  // enable date mask
  
//     // other options are optional
//     pattern: 'd/`m/`Y',  // Pattern mask with defined blocks, default is 'd{.}`m{.}`Y'
//     // you can provide your own blocks definitions, default blocks for date mask are:
//     blocks: {
//       d: {
//         mask: IMask.MaskedRange,
//         from: 1,
//         to: 31,
//         maxLength: 2,
//         placeholderChar: 'D'
//       },
//       m: {
//         mask: IMask.MaskedRange,
//         from: 1,
//         to: 12,
//         maxLength: 2,
//         placeholderChar: 'M'
//       },
//       Y: {
//         mask: IMask.MaskedRange,
//         maxLength: 4,
//         from: 1900,
//         to: 1950,
//         placeholderChar: 'Y'
//       }
//     },
//     format: function (date) {
//       var day = date.getDate();
//       var month = date.getMonth() + 1;
//       var year = date.getFullYear();
    
//       if (day < 10) day = "0" + day;
//       if (month < 10) month = "0" + month;
  
//       return [year, month, day].join('/');
//     },
//     parse: function (str) {
//       var yearMonthDay = str.split('/');
//       console.log(yearMonthDay);
//       return new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2]);
//     },
  
//     // optional interval options
//     min: new Date(2000, 0, 1),  // defaults to `1900-01-01`
//     max: new Date(2020, 0, 1),  // defaults to `9999-01-01`
  
    
  
//     // also Pattern options can be set
//     lazy: false,
  

//   });

  IMask(
    dateField,
    {
      mask: Date,
      pattern: 'd/`m/`Y',
      format: function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
    
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
    
        return [day, month, year].join('/');
      },
      parse: function (str) {
        var yearMonthDay = str.split('/');
        return new Date(yearMonthDay[2], yearMonthDay[1] - 1, yearMonthDay[0]);
      },
      blocks: {
        d: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2,
            placeholderChar: 'D'
        },
        m: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
            placeholderChar: 'M'
        },
        Y: {
            mask: IMask.MaskedRange,
            maxLength: 4,
            from: 1980,
            to: 2080,
            placeholderChar: 'Y'
        }
      },
      min: new Date(1980, 0, 1),
      max: new Date(2080, 0, 1),
      lazy: false,
  });