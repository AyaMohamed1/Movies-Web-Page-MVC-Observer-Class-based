import { eventsMediator } from './eventsMediator.js';
export class modalComponent {
    data = {};
    init(){      
        this.cacheElements();
        this.bindEvents();  
    }

    cacheElements(){
        this.modal = $("#modal-card");
    }

    bindEvents(){
        eventsMediator.on("card.clicked", this.setModalData.bind(this))
    }

    setModalData(dataForModalObj){
        this.data = dataForModalObj.dataForModal;
        this.cardClickedId = dataForModalObj.cardClickedId;
        this.render();
    }

    render(){
        $("#modal-img").attr("src", `https://image.tmdb.org/t/p/original${this.data.results[this.cardClickedId].poster_path}`);
        $("#modal-title").text(this.data.results[this.cardClickedId].original_title);
        $("#modal-rate").text(`IMDB Rating: ${this.data.results[this.cardClickedId].vote_average}/10 (${this.data.results[this.cardClickedId].vote_count}votes)`);
        $("#modal-body").text(this.data.results[this.cardClickedId].overview);
    }

};