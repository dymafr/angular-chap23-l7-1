import { Component } from "@angular/core";

@Component({
  selector: "app-exemple-component",
  templateUrl: "exemple.html",
  styleUrls: ["exemple.scss"]
})
export class ExempleComponent {
  animaux = ["Chat", "Souris", "Rat", "Chien", "Cochon", "Lama", "Alpaga"];
}
