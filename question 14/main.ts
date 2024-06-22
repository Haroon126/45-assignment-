// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let invitePerson_NAme : string [] = ["Shan", "Wasey", "Haris","Jibran", "Huzaifa"];


for (let i = 0; i < invitePerson_NAme.length; i++) {
    console.log(`Hi ${ invitePerson_NAme[i]} ! I would like to invite you to dinner`);
}