import React from 'react'

import Master from '../Master/index';

import { ContainerPesquisa } from './style.js'

export default function Home () {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
        <Master>
            <ContainerPesquisa theme={{ sc_width : "100%", bg_color : "#D26E4E"}}>

                <div class="form-group" style={{margin: "0"}}>
                    <input class="form-control" list="browsers" />
                    <datalist id="browsers">
                        <option value="Chrome" />
                        <option value="Firefox" />
                        <option value="Internet Explorer" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist>
                </div>

                <div class="form-group" style={{width: "50vw", margin: "0"}}>
                    <input type="search" class="form-control" placeholder="Pesquisar ...." />
                </div>

            </ContainerPesquisa>
        </Master>
    );
}