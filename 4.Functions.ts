namespace Functions {

  let myAdd = 
    function(x: number, y: number): number { return x + y; };

  function buildName(firstName: string, lastName = "Skywalker",
    middleName?: string) { }

  buildName('Luke');
  buildName('Luke', 'Skywalker');
  buildName('Luke', 'Skywalker', 'SonOfVader');
}