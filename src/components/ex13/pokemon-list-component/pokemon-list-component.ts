import {Component, OnInit} from '@angular/core';
import {PokeService} from '../../../services/poke-service';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.css'
})
export class PokemonListComponent implements OnInit {

  constructor(private pokeService : PokeService) {
  }

  pokemons : any[] = [];
  offset :  number = 0;
  types: string[] = ['fire', 'water', 'grass', 'electric', 'psychic', 'normal', 'fighting'];
  selectedType : string = '';

  ngOnInit(): void {
    this.load();
  }

   load() {
    this.pokeService.getPokemons(this.offset).subscribe({
      next: (data) => {
        const newPokemons = data.results.map((pokemon: any) => {
          const id = pokemon.url.split('/').filter(Boolean).pop();
          return {
            name: pokemon.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
        this.pokemons = [...this.pokemons, ...newPokemons];
        this.offset +=20;
      },
      error: (e) => console.error('Erreur lors de la récupération des pokémons', e),
      complete : () => console.log('Complete')
    });
  }

  loadMore() : void {
    this.load();
  }

  onTypeChange(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;

    if (!this.selectedType) {
      this.offset = 0;
      this.pokemons = [];
      this.load();
      return;
    }

    this.pokeService.getPokemonsByType(this.selectedType).subscribe({
      next: (data) => {
        this.pokemons = data.pokemon.map((p: any) => {
          const id = p.pokemon.url.split('/').filter(Boolean).pop();
          return {
            name: p.pokemon.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
      },
      error: (e) => console.error('Erreur lors du filtrage par type', e),
      complete: () => console.log('Filtrage terminé')
    });
  }
}
