// lang file
system.lang = {
	"name":"pt-BR"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Conectando..."
			,"connected":"Conectado"
			,"queue":"Fila:"
			,"queuefinish":"Fila(s) encerrada(s)"
			,"notfinal":"Não final"
		}
	}
	,"error":{
		"data-error":"Erro de dados."
		,"data-post-error":"Erro de dados Post."
	}
	,"config":{
		"save-path":"Dir de descarga"
	}
	,"toolbar":{
		"start":"Iniciar"
		,"pause":"Pausar"
		,"recheck":"Verificar"
		,"start-all":"Iniciar todos"
		,"pause-all":"Pausar todos"
		,"remove":"Remover"
		,"remove-all":"Remover todos"
		,"remove-data":"Remover arquivos"
		,"add-torrent":"Adicionar Torrent"
		,"attribute":"Atributos"
		,"alt-speed":"Velocidade alternativa"
		,"system-config":"Configurações"
		,"system-reload":"Recarregar"
		,"about":"Sobre"
		,"reload-time":"Auto recarregar:"
		,"reload-time-unit":"segundos"
		,"autoreload-disabled":"desabilitado"
		,"autoreload-enabled":"habilitado"
		,"search-prompt":"Procurar Torrents locais"
		,"tracker-replace":"Repor trackers"
		,"queue":"Fila"
		,"ui-mobile":"IU Mobile"
		,"ui-original":"IU Original"
		,"ui-computer":"IU Escritório"
		,"plugin":"Extensions/plugins"
		,"tip":{
			"start":"Iniciar Torrents marcados"
			,"pause":"Pausar Torrents marcados"
			,"recheck":"Verificar Torrents marcados"
			,"recheck-confirm":"Tem certeza de comprovar estes torrents? Isso pode levar algum tempo!"
			,"start-all":"Iniciar todos"
			,"pause-all":"Pausar todos"
			,"remove":"Remover"
			,"delete-all":"Eliminar todos"
			,"delete-data":"Eliminar ficheiros"
			,"add-torrent":"Adicionar torrent(s)"
			,"attribute":"Atributos"
			,"alt-speed":"Velocidade alternativa"
			,"system-config":"Configuração"
			,"system-reload":"Recarregar"
			,"about":"Sobre este aplicativo"
			,"autoreload-disabled":"Auto recarregar desligado"
			,"autoreload-enabled":"Auto recarregar ligado"
			,"tracker-replace":"Repôr os trackers"
			,"change-download-dir":"Modificar o destino"
			,"ui-mobile":"Interface Mobile"
			,"ui-original":"Interface Web"
			,"more-peers":"Pedir mais peers ao Traker"
		}
	}
	,"menus":{
		"queue":{
			"move-top":"Mover para o início"
			,"move-up":"Mover para cima"
			,"move-down":"Mover para baixo"
			,"move-bottom":"Mover para o final"
		}
		,"plugin": {
			"auto-match-data-folder": "Combinar automaticamente diretório de dados"
		}
	}
	,"title":{
		"left":"Navegação"
		,"list":"Torrents"
		,"attribute":"Atributos"
		,"status":"Estado"
	}
	,"tree":{
		"all":"Todos"
		,"active":"Ativos"
		,"paused":"Pausados"
		,"downloading":"Baixando"
		,"sending":"Enviando"
		,"error":"Erro"
		,"warning":"Aviso"
		,"actively":"Ativos"
		,"check":"Verificando"
		,"wait":"Espera"
		,"search-result":"Resultados da busca"
		,"status":{
			"loading":"Carregando..."
		}
		,"statistics":"Estatísticas"
		,"statistics":{
			"title":"Estatísticas"
			,"cumulative":"Acumuladas"
			,"current":"Atual"
			,"uploadedBytes":"Enviados: "
			,"downloadedBytes":"Baixados: "
			,"filesAdded":"Arquivos adicinados: "   
			,"sessionCount":"Contagem de sessões: " 
			,"secondsActive":"Tempo ativo: "
		}
		,"servers":"Trackers"
		,"folders":"Pastas"
		,"toolbar":{
			"nav":{
				"folders":"Pastas"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Velocidade de descarga:"
		,"uploadspeed":"Velocidade de envio:"
		,"version":"Versão:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Diretório de descarga:"
			,"torrent-url":"URL do Torrent:"
			,"tip-torrent-url":"Dica: separe por linhas (Enter) múltiplos links para adicioná-los de uma só vez"
			,"autostart":"Auto iniciar:"
			,"tip-autostart":""
			,"set-default-download-dir":"Diretório padrão"
			,"upload-file":"Arquivos Torrent:"
			,"nosource":"Nenhum ficheiro ou url Torrent."
			,"tip-title":"Arquivos Torrent têm preferência sobre URLs"
		}
		,"system-config":{
			"title":"Configuração do servidor"
			,"tabs":{
				"base":"Base"
				,"network":"Rede"
				,"limit":"Limite"
				,"alt-speed":"Agendamento"
				,"dictionary-folders":"Dicionário de pastas"
			}
			,"config-dir":"Local do ficheiro de configuração do Transmission:"
			,"download-dir":"Diretório padrão de descarga:"
			,"download-dir-free-space":"Espaço livre:"
			,"incomplete-dir-enabled":"Usar diretório de ficheiros incompletos"
			,"cache-size-mb":"Tamanho de caché de disco:"
			,"rename-partial-files":"Adicinar '.part' aos ficheiros incompletos"
			,"start-added-torrents":"Iniciar torrents adicionados automaticamente"
			,"download-queue-enabled":"Numero máximo de descargas na fila:"
			,"seed-queue-enabled":"Número máximo de seeds na fila:"
			,"peer-port-random-on-start":"Usar porta aleatória ao iniciar"
			,"port-forwarding-enabled":"Habilitar redirecionamento de portas"
			,"test-port":"Verificar porta"
			,"port-is-open-true":"A porta está aberta"
			,"port-is-open-false":"A porta está fechada"
			,"testing":"Verificando..."
			,"encryption":"Encriptação:"
			,"encryption-type":{
				"required":"Somente encriptada"
				,"preferred":"Prefencialmente encriptada"
				,"tolerated":"Qualquer conexão"
			}
			,"utp-enabled":"uTP(UPnP) habilitado"
			,"dht-enabled":"DHT habilitado"
			,"lpd-enabled":"LPD habilitado"
			,"pex-enabled":"PEX habilitado"
			,"peer-limit-global":"Número máximo de peers por conexão:"
			,"peer-limit-per-torrent":"Número máximo de peers por Torrent:"
			,"speed-limit-down-enabled":"Velocidade de descarga global:"
			,"speed-limit-up-enabled":"Velocidade de envio global:"
			,"alt-speed-enabled":"Usar velocidade alternativa"
			,"alt-speed-down":"Velocidade de descarga global:"
			,"alt-speed-up":"Velocidade de envio global:"
			,"alt-speed-time-enabled":"Usar agendamento"
			,"alt-speed-time":"Tempo:"
			,"weekday":{
				"1":"Segunda"
				,"2":"Terça"
				,"3":"Quarta"
				,"4":"Quinta"
				,"5":"Sexta"
				,"6":"Sábado"
				,"0":"Domingo"
			}
			,"blocklist-enabled":"Usar lista de bloqueio"
			,"blocklist-size":"Lista de bloqueio tem %n regra(s)."
			,"seedRatioLimited":"Taxa máxima de Seeds:"
			,"queue-stalled-enabled":"Considerar Torrents inativos como parados:"
			,"idle-seeding-limit-enabled":"Semeamento de Torrents parará se ficam inativos por:"
			,"minuets":"Minutos"
			,"nochange":"Sem mudanças"
			,"saveing":"Salvando..."
		}
		,"public":{
			"button-ok":"Aceptar"
			,"button-cancel":"Cancelar"
			,"button-reload":"Recarregar"
			,"button-save":"Salvar"
			,"button-close":"Fechar"
			,"button-update":"Atualizar"
			,"button-config":"Configurações"
		}
		,"about":{
			"infos":"Autor: culturist<br/>Aviso: A maioria dos icones usados foram encontrados pela net. Para retirar algum conteúdo, por favor contate o autor."
			,"check-update":"Comprovar atualizações"		
		}
		,"torrent-remove":{
			"title":"Confimar a eliminação"
			,"confirm-text":"Tem certeza de querer eliminar os torrents selecionados?"
			,"remove-data":"Eliminar os dados baixados"
			,"remove-error":"Erro ao eliminar!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Escolha um novo diretório"
			,"old-download-dir":"Antigo diretório:"
			,"new-download-dir":"Novo diretório:"
			,"move-data":"Se marcado, mover da localização anterior. Caso contrário, procura 'Novo diretório' para os ficheiros."
			,"set-error":"Erro!"
			,"recheck-data":"Verificar dados novamente."
		}
		,"system-replaceTracker":{
			"title":"Substituir trackers"
			,"old-tracker":"Antigo tracker:"
			,"new-tracker":"Novo tracker:"
			,"tip":"Esta função pode substituir trackers de todos os Torrents."
			,"not-found":"Tracker não encontrado."
		}
		,"auto-match-data-folder":{
			"title":"Combina automaticamente o diretório de dados"
			,"torrent-count":"Contagem de Torrents:"
			,"folder-count":"Contagem de pastas:"
			,"dictionary":"Dicionário de pastas"
			,"time-begin":"Horário de início"
			,"time-now":"Agora:"
			,"status":"Estado:"
			,"ignore":"Ignorar"
			,"working-close-confirm":"Está trabalhando, tem certeza de fechar?"
			,"time-interval":"Intervalo de tempo (segundos):"
			,"work-mode-title":"Modo:"
			,"work-mode":{
				"1":"Combinação individual por torrent"
				,"2":"Combinação individual por pasta"
			}
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Nome"
			,"hashString":"HASH"
			,"downloadDir":"Dir de descarga"
			,"totalSize":"Tamanho total"
			,"status":"Estado"
			,"percentDone":"Completo"
			,"remainingTime":"Tempo restante"
			,"addedDate":"Data de adição"
			,"completeSize":"Tamanho completo"
			,"rateDownload":"Taxa de descarga"
			,"rateUpload":"Taxa de envio"
			,"leecherCount":"Leechs"
			,"seederCount":"Seeds"
			,"uploadedEver":"Total enviado"
			,"uploadRatio":"Proporção"
		}
		,"status-text":{
			"0":"Pausado"
			,"1":"Aguardando verificação"
			,"2":"Comprovando"
			,"3":"Aguardando descarga"
			,"4":"Descarregando"
			,"5":"Aguardando semeamento"
			,"6":"Semeando"
		}
		,"attribute":{
			"tabs":{
				"base":"Base"
				,"servers":"Trackers"
				,"files":"Ficheiros"
				,"users":"Peers"
				,"config":"Configuração"
			}
			,"files-fields":{
				"name":"Nome"
				,"length":"Tamanho"
				,"percentDone":"Concluído"
				,"bytesCompleted":"Tamanho completo"
				,"wanted":"Procurado"
				,"priority":"Prioridade"
			}
			,"servers-fields":{
				"announce":"Anúncio"
				,"announceState":"Estado"
				,"lastAnnounceResult":"Info"
				,"lastAnnounceSucceeded":"Sucesso"
				,"lastAnnounceTime":"Anúncio"
				,"lastAnnounceTimedOut":"Tempo limite"
				,"downloadCount":"Contagem de descarga"
				,"nextAnnounceTime":"Próximo anúncio"
			}
			,"peers-fields":{
				"address":"IP address"
				,"clientName":"Cliente"
				,"flagStr":"Flag"
				,"progress":"Progresso"
				,"rateToClient":"Vel de descarga"
				,"rateToPeer":"Vel de envio"
			}
			,"status":{
				"true":"Verdadeiro"
				,"false":"Falso"
			}
			,"priority":{
				"0":"Normal"
				,"1":"Alto"
				,"-1":"Baixo"
			}
			,"label":{
				"name":"Nome:"
				,"addedDate":"Data de adição:"
				,"totalSize":"Tamanho completo:"
				,"completeSize":"Tamanho completo:"
				,"leftUntilDone":"Tempo estimado:"
				,"hashString":"HASH:"
				,"downloadDir":"Dir descarga:"
				,"status":"Estado:"
				,"rateDownload":"Vel de descarga:"
				,"rateUpload":"Vel de envio:"
				,"leecherCount":"Leechers:"
				,"seederCount":"Seeds:"
				,"uploadedEver":"Total enviado:"
				,"uploadRatio":"Proporção de envio:"
				,"creator":"Criador:"
				,"dateCreated":"Data de criação:"
				,"comment":"Comentário:"
				,"errorString":"Erro de String:"
				,"downloadLimited":"Velocidade máxima de descarga:"
				,"uploadLimited":"Velocidade máxima de envio:"
				,"peer-limit":"Número máximo de peers por torrent:"
				,"seedRatioMode":"Proporção de envio:"
				,"seedIdleMode":"Semeamento será interrompido se inativos por:"
			}
			,"tip":{
				"button-allow":"Baixar arquivos selecionados"
				,"button-deny":"Ignorar arquivos selecionados"
				,"button-priority":"Definir prioridade"
			}
			,"other":{
				"tracker-remove-confim":"Tem certeza que deseja eliminar este tracker?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Expandir atributos automaticamente"
		}
	}
	,"public":{
		"text-unknown":"Desconhecido"
		,"text-drop-title":"Arrasta o ficheiro Torrent para esta área para adicionar ele ao transmission."
		,"text-saved":"Salvo"
		,"text-nochange":"Sem alterações"
		,"text-info":"Info"
		,"text-confirm":"Tem certeza?"
		,"text-browsers-not-support-features":"O navegador atual não suporta esta função!"
		,"text-download-update":"Baixe esta atualização"
		,"text-have-update":"Há uma atualização disponível"
	}
};