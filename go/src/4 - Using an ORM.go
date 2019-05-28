package main

import (
 // "fmt"
  "github.com/jinzhu/gorm"                            
  _ "github.com/jinzhu/gorm/dialects/sqlite"          
)


type User struct {
  ID uint `json:"id"`
  Name string `json:"name"`
  EmailId string `json:"emailid"`
}

type Quiz struct {
   ID uint `json:"id"`
   Genre string `json:"genre"`
   Question string `json:"question"`
   Option1 string `json:"option1"`
   Option2 string `json:"option2"`
   Option3 string `json:"option3"`
   Option4 string `json:"option4"`
   Answer string `json:"answer"`
   QType string `json:"q_type"`
}

func main() {
   db, _ := gorm.Open("sqlite3", "./gorm.db")            
   defer db.Close()                                       
   db.AutoMigrate(&User{})                              

   db.AutoMigrate(&Quiz{})                              
   p1 := Quiz{Genre: "Music", Question: "What term means to sing a song with no musical accompaninment?", Option1: "Andante", Option2: "Arpeggio", Option3: "A prime vista", Option4:"Acapella", Answer: "4", QType:"1"}
   db.Create(&p1)
   p2 := Quiz{Genre: "Music", Question: "First song directed by AR Rehman is in which language?", Option1: "Hindi", Option2: "Malyalam", Option3: "Oriya", Option4:"Kannada", Answer: "2", QType:"1"}
   db.Create(&p2)
   p3 := Quiz{Genre: "Music", Question: "What rapper was caught with pot at the Osla airport in 2012?", Option1: "Snoop Dogg", Option2: "Kitty Kat", Option3: "Guinea Pigg", Option4:"Billy Goat", Answer: "1", QType:"1"}
   db.Create(&p3)                                        
   p4 := Quiz{Genre: "Music", Question: "Rihanna comes from which Caribbean island", Option1: "Grenada", Option2: "Barbodas", Option3: "Trinidad", Option4:"Jamaica", Answer: "2", QType:"1"}
   db.Create(&p4)
   p5 := Quiz{Genre: "Music", Question: "What album includes Adele's song 'Rolling In The Deep'", Option1: "Collapse into Now", Option2: "Killling Time", Option3: "21", Option4:"19", Answer: "3", QType:"1"}
   db.Create(&p5)
   p6 := Quiz{Genre: "Music", Question: "The Weeknd's 2015 hit:'Can't Feel My ___?", Option1: "Pain", Option2: "Face", Option3: "Legs", Option4:"Hands", Answer: "2", QType:"1"}
   db.Create(&p6)
   p7 := Quiz{Genre: "Music", Question: "In which all languages is Zara-Zara song there?", Option1: "Hindi", Option2: "Malyalam", Option3: "Telugu", Option4:"Tamil", Answer: "1,2,4", QType:"2"}
   db.Create(&p7)
   p8 := Quiz{Genre: "Books", Question: "What is the book series written by Lemony Snicket?", Option1: "HarryPotter", Option2: "Divergent", Option3: "Famous Five", Option4:"A Series of Unfortunate Events", Answer: "4", QType:"1"}
   db.Create(&p8)
   p9 := Quiz{Genre: "Books", Question: "Who does Katniss Everdeen volunteer for to go into the hunger games?", Option1: "Peeter", Option2: "Her Mother", Option3: "Hay Mitch", Option4:"Primrose", Answer: "4", QType:"1"}
   db.Create(&p9)
   p10 := Quiz{Genre: "Books", Question: "Who does Katniss Everdeen volunteer for to go into the hunger games?", Option1: "Peeter", Option2: "Her Mother", Option3: "Hay Mitch", Option4:"Primrose", Answer: "4", QType:"1"}
   db.Create(&p10)
   p11 := Quiz{Genre: "Books", Question: "In the book 'Divergent' which faction does Tris choose at the choosing ceremony?", Option1: "Dauntless", Option2: "Erudite", Option3: "Amity", Option4:"Candor", Answer: "1", QType:"1"}
   db.Create(&p11)   
   p12 := Quiz{Genre: "Books", Question: "What is the name of the Winnie the Poo's best friend?", Option1: "Piglet", Option2: "Eeyore", Option3: "Tigger", Option4:"Kanga", Answer: "1", QType:"1"}
   db.Create(&p12)
}
