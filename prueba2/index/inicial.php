		<section id="ihome">
			<article id="marco">
				<ul id="fotolist">
					<?php
					$url = 'xml/fotos.xml';
					$int=1;
					$contenido_xml = "";
					if($d = fopen($url, "r")){
					  while ($aux= fgets($d, 1024)){
						$contenido_xml .= $aux;
					  }
					  fclose($d);
					}else{
					  echo "No se pudo abrir el XML";
					}
					$xml = simplexml_load_string($contenido_xml);
					$limite = count($xml->Item);
					$dindex = $limite;
					for($i=0; $i<count($xml->Item); $i++){
						if($int==1){$clase='class="activ"';}else{$clase='';}
						$imagen = galsdirectory() . "galerias/" . $xml->Item[$i]->ItemGal . "/" . $xml->Item[$i]->ItemFoto;
						echo '<li id="' . $int . '" style="background-image:url('.$imagen.'); z-index: '.$dindex.';"></li>
						';
						$int++;
						$dindex--;
					}
					?>
				</ul>
			</article>
			<article class="iconos fcbk">
				<img src="<?php echo base_url(); ?>imgs/fblogo.jpg" border="0" title="FaceBook" alt="FB" />
			</article>
			<article class="iconos twtr">
				<img src="<?php echo base_url(); ?>imgs/twitter_bird.jpg" border="0" title="Twitter" alt="TW" />
			</article>
			<article class="iconos twtrmsg">
				<img src="<?php echo base_url(); ?>imgs/Quote_Left.jpg" class="comilla_in" border="0" width="11" />
				<div id="twttrm">
					<a class="twitter-timeline" href="https://twitter.com/jorgea3004" data-widget-id="271729451757346816" 
						data-tweet-limit="1" height="190" data-chrome="nofooter noborders transparent">
						Tweets por @jorgea3004</a>
					<script>
						!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
					</script>
				</div>
				<img src="<?php echo base_url(); ?>imgs/Quote_Right.jpg" class="comilla_out" border="0" width="11" />
				<label>@jorgea3004</label>
			</article>
			<?php
			$url = 'xml/fotosmg.xml';
			$int=1;
			$contenido_xml = "";
			if($d = fopen($url, "r")){
			  while ($aux= fgets($d, 1024)){
				$contenido_xml .= $aux;
			  }
			  fclose($d);
			}else{
			  echo "No se pudo abrir el XML";
			}
			$xml = simplexml_load_string($contenido_xml);
			$limite = count($xml->Item);
			for($i=0; $i<count($xml->Item); $i++){
				if($int==1){$clase='class="activ"';}else{$clase='';}
				$imagen = galsdirectory() . "galerias/" . $xml->Item[$i]->ItemGal . "/" . $xml->Item[$i]->ItemFoto;
				echo '<article class="iconos clkgal" style="background-image:url('.$imagen.');">
				<input type="hidden" id="clkimgg" name="clkimgg" class="clkimgg" value="' . $xml->Item[$i]->ItemGal . '" />
				<p>' . $xml->Item[$i]->ItemGalName . '</p>
			</article>
			';
				$int++;
			}
			?>
		</section>
