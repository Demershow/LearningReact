import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabContent from '../common/tab/TabContent'
import TabHeader from '../common/tab/TabHeader'

class BillingCycle extends Component {
    render(){
        return(
            <div>
                <ContentHeader titlte='Ciclos de pagamentos' small='cadastro' />
                <Content>
                    <Tabs> 
                        <TabsHeader>
                            <TabHeader label='listar' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='incluir' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='alterar' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='excluir' icon='trash-o' target='tabDelete'></TabHeader>
                        </TabsHeader>
                        <TabContent>

                        </TabContent>
                   </Tabs>
                </Content>
                
            </div>
        )
    }
}

export default BillingCycle
