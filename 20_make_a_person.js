var Person = function(firstAndLast) {
    
    let fullName;

    this.setFullName = function (full) {
        fullName = full.split(" ");
        return fullName;
    }
    this.setFirstName = function (first) {
        fullName[0] = first
        return fullName[0]
    }
    this.setLastName = function (last) {
        fullName[1] = last
        return fullName[1]
    }

    this.setFullName(firstAndLast);

    this.getFullName = function () {
        return fullName.join(" ");
    }
    this.getFirstName = function () {
        return fullName[0]
    }
    this.getLastName = function () {
        return fullName[1]
    }
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.setFirstName("Josephine"));
  
  